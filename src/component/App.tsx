import React from 'react';
import TodoListManagement from './todolist/TodoListManagement';
import SignInPage from './authentication/SigninPage';
import { AuthenticationProvider, TestProvider, useAuth } from './authentication/AuthenticationProvider';

const App: React.FC = () => {
    
    return (<div>
        <AuthenticationProvider>
        <Main/>
    </AuthenticationProvider>
    </div>);
}

const Main: React.FC = () => {
    const { status } = useAuth();

    return (<>{ status === 'UNAUTHENTICATED' ?
        <SignInPage/> : <TodoListManagement/>
    }</>)
}

export default App;