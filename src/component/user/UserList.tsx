import React from 'react';
import UserListItem from './UserListItem';
import User from './userModel';

interface props {
    user: User;
}

interface stateParams {
    users: User[]
}
export default class UserList extends React.Component<props, stateParams> {
    constructor(props) {
        super(props);
        this.state =   { users: [] };

    }
    addUser(user: User) {
        const state: stateParams = { users: Object.assign(this.state.users, user) };
        this.setState(state);
        console.log('state', state);
    }

    /*static getDerivedStateFromProps(nextProps, prevState) {
        return {
         users: Object.assign(prevState.users, nextProps.user) ,
        };
       }*/

    render() {
        return (<div>
            <div id="header">
                <span> Nom </span>
                <span> Prénom </span>
                <span> Langue </span>
            </div>
            {
                this.state.users.forEach((user: User) => (
                    <UserListItem firstname={user.firstname} lastname={user.lastname} language={user.language} />
                ))
            }
        </div>);
    }

    /*componentDidMount() {
        this.addUser(this.props.user);
    }*/

  /*  componentDidUpdate() {
        this.addUser(this.props.user);
    }*/
}