import {Component} from 'react'

import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
    isChecked: false,
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
    isChecked: false,
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
    isChecked: false,
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
    isChecked: false,
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
    isChecked: false,
  },
  {
    id: 6,
    title: 'Fix the production issue',
    isChecked: false,
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
    isChecked: false,
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
    isChecked: false,
  },
]

class SimpleTodos extends Component {
  state = {
    todosList: initialTodosList,
    todoTitle: '',
  }

  deleteTodo = id => {
    const {todosList} = this.state
    const updatedTodosList = todosList.filter(eachTodo => eachTodo.id !== id)

    this.setState({
      todosList: updatedTodosList,
    })
  }

  isChecked = (id, value) => {
    const {todosList} = this.state
    this.setState({
      todosList: todosList.map(eachTodo => {
        if (eachTodo.id === id) {
          return {
            ...eachTodo,
            isChecked: value,
          }
        }
        return eachTodo
      }),
    })
  }

  addTodo = () => {
    const {todoTitle} = this.state

    if (todoTitle.length > 0) {
      this.setState(prevState => ({
        todosList: [
          ...prevState.todosList,
          {
            id:
              prevState.todosList.length > 0
                ? prevState.todosList[prevState.todosList.length - 1].id + 1
                : 0,
            title: todoTitle,
            isChecked: false,
          },
        ],
        todoTitle: '',
      }))
    }
  }

  changeTodoTitle = (id, value) => {
    const {todosList} = this.state
    this.setState({
      todosList: todosList.map(eachTodo => {
        if (eachTodo.id === id) {
          return {
            ...eachTodo,
            title: value,
          }
        }
        return eachTodo
      }),
    })
  }

  addNewTodoTitle = event => {
    this.setState({todoTitle: event.target.value})
  }

  render() {
    const {todosList, todoTitle} = this.state

    return (
      <div className="app-container">
        <div className="simple-todos-container">
          <h1 className="heading">Simple Todos</h1>
          <div className="add-new-todo-container">
            <input
              onChange={this.addNewTodoTitle}
              type="text"
              value={todoTitle || ''}
              placeholder="Add new todo"
            />
            <button onClick={this.addTodo} type="button">
              ADD
            </button>
          </div>
          <ul className="todos-list">
            {todosList.map(eachTodo => (
              <TodoItem
                key={eachTodo.id}
                todoDetails={eachTodo}
                deleteTodo={this.deleteTodo}
                isCheckedTodo={this.isChecked}
                changeTodoTitle={this.changeTodoTitle}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
