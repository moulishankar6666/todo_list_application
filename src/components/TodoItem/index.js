import {useState} from 'react'

import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo, isCheckedTodo, changeTodoTitle} = props
  const {id, title, isChecked} = todoDetails
  const [isSaved, setSaved] = useState(true)
  const [editedTitle, editTitle] = useState(title)

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  const changeTodoCheckbox = event => {
    isCheckedTodo(id, event.target.checked)
  }

  const editAndSaved = () => {
    setSaved(!isSaved)
    if (!isSaved) {
      changeTodoTitle(id, editedTitle)
    }
  }

  const editTodoTitle = event => {
    editTitle(event.target.value)
  }

  return (
    <li id={id} className="todo-item">
      <div className="checkbox-title-container">
        <input
          onChange={changeTodoCheckbox}
          className="checkbox"
          type="checkbox"
        />
        {isSaved ? (
          <p className={`title ${isChecked ? 'checked-todo' : null}`}>
            {title}
          </p>
        ) : (
          <input
            className="edit-input"
            onChange={editTodoTitle}
            type="text"
            value={editedTitle}
          />
        )}
      </div>
      <div className="edit-and-delete-buttons">
        <button onClick={editAndSaved} className="edit-btn" type="button">
          {isSaved ? 'Edit' : 'Save'}
        </button>
        <button type="button" className="delete-btn" onClick={onDeleteTodo}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
