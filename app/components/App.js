import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import AsyncView from "../containers/AsyncView.js"

const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />

        <AsyncView />
    </div>
)

export default App