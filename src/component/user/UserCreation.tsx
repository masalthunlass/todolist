import React from 'react';
import UserModel from './userModel';

interface stateParam {
    user: UserModel;
}


interface props {
    onSubmit: (value: stateParam) => void;
}

export default class UserCreation extends React.Component<props, stateParam> {
    constructor(props) {
        super(props);
        this.state = { user: { lastname: '', firstname: '', language: 'none' } }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
         if (this.props.onSubmit) {
             this.props.onSubmit(this.state);
         }
    }

    onChange(event) {
        const fieldName: string = event.target.name;
        const fieldValue: string = event.target.value;
        const state: stateParam =  { user : {...this.state.user, [fieldName]: fieldValue } } ;
        this.setState(state);
    }

    render() {
        return (<><form onSubmit={this.onSubmit} >
            <span><label> Prénom </label><input type="text" name="firstname"  onChange={this.onChange}></input> </span>
            <span> <label> Nom </label><input type="text" name="lastname"  onChange={this.onChange}></input></span>
            <span><label> Langue </label>
                <select onChange={this.onChange} name="language" >
                    <option value="none"> ---- </option>
                    <option value="fr"> Français </option>
                    <option value="en"> English </option>
                    <option value="es"> Español </option>
                    <option value="ko"> 한국어 </option>
                </select> </span>
            <button type="submit" value="ok"> ok </button>
        </form></>)
    }

}