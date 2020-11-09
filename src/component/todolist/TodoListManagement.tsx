
import React from 'react';
import { connect } from 'react-redux';
import actionsCreator from '../../store/actions';
import { AppState } from '../../store/store';

interface StateProps {
    todos: string[];
}

interface DispatchProps {
    addTodo: (string) => void;
}

interface OwnProps {
    todo: string;
}

const mapStateToProps = (state: AppState)=> {
    return {
        todos: state.todos || []
    }
}


const mapDispatchToProps = (dispatch) =>  {
    return {
        addTodo: todo => { dispatch(actionsCreator.addTodo(todo))}
    }
}

type Props = StateProps & DispatchProps & OwnProps;


const TodoListManagement: React.FC<Props> = (props) => {

    const [todo, setTodo] = React.useState('rien');

    return (<div id="todolist">
        <h3>Je dois faire :</h3>
        <input type="text" value={todo} onChange={onChange(setTodo)} ></input>
        <button onClick={() => props.addTodo(todo) } >ok</button>
        {
            props.todos.map((todo: string, index: number) => {
                return (<p key={index}> - {todo}</p>);
            })
        }
    </div>);
}

const onChange = (setTodo) => (event) => {
    const fieldValue: string = event.target.value;
    setTodo(fieldValue);
};



export default connect(mapStateToProps, mapDispatchToProps)(TodoListManagement);

