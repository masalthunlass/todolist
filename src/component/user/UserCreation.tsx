import React from 'react';
import UserModel from './userModel';

interface stateParam {
    user: UserModel;
}


interface props {
    onSubmit: (value: stateParam) => void;
}


    const UserCreation : React.FC<props> = ({onSubmit}) => {

        const [user, setUser] = React.useState(  { lastname: '', firstname: '', language: 'none' }  );

        return (<div><form onSubmit={onSubmitForm(user, onSubmit) } >
            <span><label> Prénom </label><input type="text" name="firstname"  onChange={onChange(user, setUser)}></input> </span>
            <span> <label> Nom </label><input type="text" name="lastname"  onChange={onChange(user, setUser)}></input></span>
            <span><label> Langue </label>
                <select onChange={onChange(user, setUser)} name="language" >
                    <option value="none"> ---- </option>
                    <option value="Français"> Français </option>
                    <option value="English"> English </option>
                    <option value="Español"> Español </option>
                    <option value="한국어"> 한국어 </option>
                </select> </span>
            <button type="submit" value="ok"> ok </button>
        </form></div>);
    }


    const  onChange = (user, setUser) => (event) => {
        const fieldName: string = event.target.name;
        const fieldValue: string = event.target.value;
        setUser( {...user, [fieldName]: fieldValue  } );     

    }

    
    const onSubmitForm = (user, onSubmit) =>  (event) => {
        event.preventDefault();
         if (onSubmit) {
            onSubmit({user: user});

         }
    }

  
 export default  UserCreation;

