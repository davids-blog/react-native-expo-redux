import React, { Component } from 'react'
import { View } from 'react-native'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

class ConnectedApp extends Component {

    render() {
        return (
            <View>
                <AddTodo />
                <VisibleTodoList />
                <Footer />
            </View>
        )
    }
}

export default ConnectedApp