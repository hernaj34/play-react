import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addTodo} from './actions';

class Todos extends Component {
  constructor(props){
    super(props);
    this.handleNewTodoChange = this.handleNewTodoChange.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.state = {newTodo: ""};
  }
  handleNewTodoChange(e){
    this.setState({newTodo: e.target.value});
  }

  handleAddTodo(){
    this.props.addTodo(this.state.newTodo);
    this.setState({newTodo: ""});
  }

  render() {
    return (
      <div>
        <input value={this.state.newTodo} onChange={this.handleNewTodoChange} />
        <button onClick={this.handleAddTodo}>Add ToDo</button>
        <ul>
        {
          this.props.todos.map(function(todo,index){
            return <li key={index}>{todo.text}</li>
          })
        }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (newTodo) => {
      dispatch(addTodo(newTodo));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Todos);