import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

const Todo = (props) => {
    return (
        <TouchableOpacity
            onPress = { props.onPress }
        >
            <View
                // style={{textDecoration: props.item.completed ? 'line-through' : 'none'}}
            >
                <Text>{ props.item.text }</Text>
            </View>
        </TouchableOpacity>
    )
}

Todo.propTypes = {
    onPress: PropTypes.func.isRequired,
    item: PropTypes.shape({
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired,
        }).isRequired
}

export default Todo