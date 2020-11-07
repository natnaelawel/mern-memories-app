import React from 'react'
import './App.css'
import Home from './pages/Home/Home'

import {Provider} from 'react-redux'
import {createStore, compose, applyMiddleware} from 'redux'
import thunk  from 'redux-thunk'

import reducers from './store/reducers'


const store = createStore(reducers, compose(applyMiddleware(thunk)))
function App() {

    return (
        <Provider store={store}>
            <Home/>
        </Provider>
    )
}

export default App
