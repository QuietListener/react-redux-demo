import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore,applyMiddleware,compose } from 'redux'
import todoApp from './reducer'
import App from './components/App'
import { createLogger } from 'redux-logger'
import promise from 'redux-promise'
import thunkMiddleware from 'redux-thunk'
const loggerMiddleware = createLogger()

let store = createStore(
    todoApp,
    {},
    applyMiddleware(
        thunkMiddleware,
        promise,
        loggerMiddleware
    ))

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)