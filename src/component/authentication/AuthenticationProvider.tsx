import React, { useContext, createContext, useState, useEffect } from 'react';

type Status =  'UNAUTHENTICATED' | 'AUTHENTICATED';


export interface AuthStatus {
   status: Status;
   signin: (login:string, password:string) => void;
}

const noop = () => {};
const defaultAuthStatus: AuthStatus = {
  status: 'UNAUTHENTICATED',
  signin: noop
}
const useProvideAuthentication = (): AuthStatus => {
  const [status, setStatus] = useState<Status>('UNAUTHENTICATED');
  
  const signin = (login, password) => {
    console.log({login, password});
      //todo verifier login and password
      if (login !== '' && password !== '') {
        setStatus('AUTHENTICATED');
        
      }
     
  }; 
  return { status , signin};
}; 

const AuthContext: React.Context<AuthStatus> = createContext(defaultAuthStatus);

const AuthenticationProvider = ({children}) => {
  const value = useProvideAuthentication();
  return <AuthContext.Provider value={value} >
    {children}
  </AuthContext.Provider>;
}

const TestProvider = () => {
  const authStatus = useProvideAuthentication();
  return (<div>
    <button value="ici" onClick={() => authStatus.signin('toto', 'tata')}>ici</button>
    {authStatus.status}
  </div>)
}
const useAuth = () => {
   return useContext(AuthContext);
};



export {AuthenticationProvider, useAuth, TestProvider}
