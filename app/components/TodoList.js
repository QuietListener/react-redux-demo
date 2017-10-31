import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo.js'

class TodoList extends React.Component
{
    render()
    {
        return(
            <ul>
                {this.props.todos.map((todo, index) => {
                    return <div key={index}
                                 style={{textDecoration:todo.completed?'line-through':'none'}}
                                 onClick={()=>this.props.onTodoClick(index)}>
                        {todo.text}
                        </div>
                })}
            </ul>
        )
    }
}



export default TodoList;