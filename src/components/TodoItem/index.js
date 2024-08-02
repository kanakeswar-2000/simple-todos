// Write your code here
import './index.css'

const Todoitem = props => {
  const {todoDetails, deleteUser} = props
  const {id, title} = todoDetails
  const onDelete = () => {
    deleteUser(id)
  }
  return (
    <li>
      <div className="todo-container">
        <p className="todo-name">{title}</p>
        <button className="button" type="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}
export default Todoitem
