import React, { Component } from 'react'
import { View, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class AddTodo extends Component {
    state = {
        todoName: '',
        todos: []
    }

    addTodoSubmitHandler = () => {
        if (this.state.todoName.trim() === '') {
            return;
        }
        this.props.add(this.state.todoName);
    }

    addTodoChangeHandler = (value) => {
        this.setState({
            todoName: value
        });
    }

    render() {
        return (
              <View>
                  <TextInput
                      placeholder = 'Todo name'
                      value = { this.state.todoName }
                      onChangeText = { this.addTodoChangeHandler }
                  />
                  <Button title = 'Add Todo'
                          onPress = { this.addTodoSubmitHandler }
                  />
              </View>
          )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos.todos
    }
};

const mapDispatchToProps = dispatch => {
    return {
        add: (name) => {
            dispatch(addTodo(name))
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(AddTodo)