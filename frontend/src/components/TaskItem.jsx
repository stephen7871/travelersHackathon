import { useDispatch } from 'react-redux'
import { deleteTask} from '../features/tasks/taskSlice'

function TaskItem({ task }) {
  const dispatch = useDispatch()

  return (
    <div className='goal'>
      <div>{new Date(task.createdAt).toLocaleString('en-US')}</div>
      <h2>{task.description}</h2>
      <p>{task.teamSize}</p>
      <p>{task.Budget}</p>
      <p>{task.Workload}</p>
      <p>{task.completionTime}</p>
      <p>{task.complete}</p>
      <p>{task.personAssigned}</p>
      <p>{task.dueDate}</p>
      <p>{task.estimatedDuration}</p>
    </div>
  )
}

export default TaskItem
