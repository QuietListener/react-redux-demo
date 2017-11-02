import { connect } from 'react-redux'
import TodoList from "../components/TodoList.js"
import {fetchPostsIfNeeded} from '../actions'

import AsyncView_ from "../components/AsyncView.js"

const mapStateToProps = state=>{
    return {
        ppp:state.ppp
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        click: (name) => dispatch(fetchPostsIfNeeded(name))
    }
}

const AsyncView = connect(mapStateToProps,  mapDispatchToProps)(AsyncView_)

export default AsyncView;
