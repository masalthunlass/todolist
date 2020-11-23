import React from 'react';
import {  useAuth } from './AuthenticationProvider';

interface LoggedInUser {
    login: string;
    password: string;
}

const defaultUser:LoggedInUser  =  {
    login : '',
    password : ''

};

const SignInPage: React.FC = () => {
    const [user, setUser] = React.useState(defaultUser);
    const { signin } = useAuth();

    return (
    <form id="sign-in-page" >
        <label > identifiant </label>
        <input type="text" 
        name="login"
        value={user.login}
         onChange={onChange(user, setUser)}
        ></input>
      
        <label > mot de passe </label>
        <input type="password" 
        name="password" 
        value={user.password}
        onChange={onChange(user, setUser)}
        ></input>
    
        <input type="button" value="ok" onClick={() => signin(user.login, user.password) }  />
    </form>
    );
}

const onChange = (user, setUser) => (event) => {
    const fieldName: string = event.target.name;
    const fieldValue: string = event.target.value;
    setUser({ ...user, [fieldName]: fieldValue });
  };

export default SignInPage;