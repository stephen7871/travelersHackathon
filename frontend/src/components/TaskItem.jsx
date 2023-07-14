import { useDispatch } from 'react-redux'
import { deleteTask} from '../features/tasks/taskSlice'

function TaskItem({ task }) {
  const dispatch = useDispatch()

  return (
    <div className='goal'>
      <div>{new Date(task.createdAt).toLocaleString('en-US')}</div>
      <h2>{task.description}</h2>
      <p>User: "{task.user}"</p>
      <p>team Size: "{task.teamSize}"</p>
      <p>Budget: "{task.Budget}"</p>
      <p>Workload: "{task.Workload}"</p>
      <p>Completion Time: "{task.completionTime}"</p>
      <p>Complete: "{task.complete}"</p>
      <p>Person Assigned: "{task.personAssigned}"</p>
      <p>Due Date: "{task.dueDate}"</p>
      <p>Est. Duration: "{task.estimatedDuration}"</p>
      <button onClick={()=>dispatch(deleteTask(task._id)) }className='close'>x</button>
    </div>
  )
}

export default TaskItem
