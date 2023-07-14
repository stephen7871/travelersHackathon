import { useDispatch } from 'react-redux'
import { deleteTask} from '../features/tasks/taskSlice'

function TaskItem({ task }) {
  const dispatch = useDispatch()

  return (
    <div className='goal'>
      <div>{new Date(task.createdAt).toLocaleString('en-US')}</div>
      <h2>{task.description}</h2>
      <p>{task.user}</p>
      <p>{task.teamSize}</p>
      <p>{task.Budget}</p>
      <p>{task.Workload}</p>
      <p>{task.completionTime}</p>
      <p>{task.complete}</p>
      <p>{task.personAssigned}</p>
      <p>{task.dueDate}</p>
      <p>{task.estimatedDuration}</p>
      <button onClick={()=>dispatch(deleteTask(task._id)) }className='close'>x</button>
    </div>
  )
}

export default TaskItem
