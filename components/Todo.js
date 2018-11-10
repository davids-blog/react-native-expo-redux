import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

const Todo = (props) => {
    return (
        <TouchableOpacity
            onPress = { props.onPress }
        >
            <View
                // style={{textDecoration: completed ? 'line-through' : 'none'}}
            >
                <Text>{ props.todoName }</Text>
            </View>
        </TouchableOpacity>
    )
}

Todo.propTypes = {
    onPress: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    todoName: PropTypes.string.isRequired
}

export default Todo