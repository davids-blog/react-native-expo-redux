import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = (props) => (
    <FlatList
        data = { props.todos }
        keyExtractor = {(item, index) => index.toString()}
        renderItem = { todo => (
            <Todo
                key = { todo.id }
                { ...todo }
                onPress = {() => props.toggleTodo(todo.id)}
            />
        )}
    />
)

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    toggleTodo: PropTypes.func.isRequired
}

export default TodoList