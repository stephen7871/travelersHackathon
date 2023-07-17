import { useDispatch } from 'react-redux'
import { deleteTask} from '../features/tasks/taskSlice'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function TaskItem({ task }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth)
  const editThis =(tas)=>{
    localStorage.setItem('task', JSON.stringify(tas))
    const task = JSON.parse(localStorage.getItem('task'));
    console.log(task._id + "here");
    navigate('/update')
  }

  return (
    <div className='goal'>
      
      <p><b>Team Size:</b> {task.teamSize}</p>
      <p><b>Budget:</b> ${task.Budget}</p>
      <p><b>WorkLoad:</b>{task.Workload}</p>
      <p><b>Completion Time:</b>{task.completionTime}</p>

     
      <hr color='black'></hr>
      <h1>task for project</h1>
      <p><b>Decrption:</b>{task.description}</p>
      <p><b>complete: </b>{task.complete}</p>
      <p><b>Person Assigned: </b>{task.personAssigned}</p>
      <p><b>Due Date:</b>{task.dueDate}</p>
      <p><b>Estimated Duration: </b>{task.estimatedDuration}</p>
      
      
      
      
      
      
      
      
      <p>{task._id}</p>
      
<>
      {(user?.email === 's@gmail.com') &&
      <>
      <button onClick={()=>editThis(task) }>edit</button>
      
       <button onClick={()=>dispatch(deleteTask(task._id)) }className='close'>x</button>
       </> 
      }
      {(user?.email === 'bob@gmail.com') &&
      <>
      <button onClick={()=>editThis(task) }>edit</button>
      
       <button onClick={()=>dispatch(deleteTask(task._id)) }className='close'>x</button>
       </>       
      }
      {(user?.email === 'me@123') &&
      <>
      <button onClick={()=>editThis(task) }>edit</button>
      
       <button onClick={()=>dispatch(deleteTask(task._id)) }className='close'>x</button>
       </> 
      }
      </>
      
    </div>
  )
}

export default TaskItem
