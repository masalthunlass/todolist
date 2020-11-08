import React from 'react';
import TodoListManagement from './todolist/TodoListManagement';
import UserManagement from './user/UserManagement';

const App : React.FC = () => {
  

    return (<>
        <UserManagement></UserManagement>
        <br /><br />
        <TodoListManagement></TodoListManagement></>);
}


export default App;