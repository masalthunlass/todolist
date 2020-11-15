
import React from 'react';
import { connect } from 'react-redux';
import actionsCreator from '../../store/action/todoListActions';
import { AppState } from '../../store/store';
import { fetchTodos } from '../../store/reducer/todoReducer'

interface StateProps {
    todos: string[];
}

interface DispatchProps {
    addTodo: (string) => void;
    getTodoList: (() => string[]);
}

interface OwnProps {
    todo: string;
}

const mapStateToProps = (state: AppState) => {
    return {
        todos: state.todos || []
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: todo => { dispatch(actionsCreator.addTodo(todo)) },
        getTodoList: () => { dispatch(fetchTodos()) }
    }
}

type Props = StateProps & DispatchProps & OwnProps;


const TodoListManagement: React.FC<Props> = (props) => {

    const [todo, setTodo] = React.useState('rien');

    React.useEffect(() => {
        props.getTodoList();
    }, [props]);

    return (<div id="todolist">
        <h3>Je dois faire :</h3>
        <input type="text" value={todo} onChange={onChange(setTodo)} ></input>
        <button onClick={() => props.addTodo(todo)} >ok</button>
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

