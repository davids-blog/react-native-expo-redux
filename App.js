import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import ConnectedApp from './components/ConnectedApp'

const store = createStore(rootReducer)

export default class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <ConnectedApp />
            </Provider>
        )
    }
}
