/**
 * reducer 就是一个纯函数，接收旧的 state 和 action，返回新的 state。
 * (previousState, action) => newState
 */

import { VisibilityFilters,SET_VISIBILITY_FILTER,ADD_TODO,TOGGLE_TODO, INCREMENT_COUNTER,RECEIVE_POSTS } from './actions'

const initialState={
    visibilityFilter:VisibilityFilters.SHOW_ALL,
    todos:[]
}

function todos_(todos = [],action={})
{
    switch(action.type)
    {
        case ADD_TODO:
            return [
                    ...todos,{text:action.text,completed:false}
                ]

        case TOGGLE_TODO:
            return todos.map((todo,index)=>{
                    if(index === action.index){
                        return Object.assign({},todo, {completed:!todo.completed})
                    }

                    return todo;
            })

        default:
            return todos

    }
}


function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action={})
{
    switch(action.type)
    {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state

    }
}
function posts(state,action={})
{
    switch(action.type)
    {
        //case INCREMENT_COUNTER:
        //    console.log(INCREMENT_COUNTER,"111111")
        //    return action.posts
        case RECEIVE_POSTS:
            console.log(RECEIVE_POSTS,"111111")
            return action.posts
        default:
            return state

    }
}

/**
 * 合成一个reducer
 */

function todoApp(state={},action={})
{
    return {
        visibilityFilter:visibilityFilter(state.visibilityFilter,action),
        todos:todos_(state.todos, action),
        ppp:posts(state.posts,action)
    }
}


export default todoApp;
