import { connect } from 'react-redux'
import TodoList from "../components/TodoList.js"
import {toggleTodo,TOGGLE_TODO} from  "../actions.js"

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
    }
}

const mapStateToProps = state=>{
    return {
        todos:getVisibleTodos(state.todos,state.visibilityFilter)
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            dispatch(toggleTodo(id))
        }
    }
}

const VisibileTodoList = connect(mapStateToProps,mapDispatchToProps)(TodoList)

export default VisibileTodoList;
