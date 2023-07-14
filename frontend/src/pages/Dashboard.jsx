import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import TaskForm from '../components/TaskForm'
import TaskItem from '../components/TaskItem'
import Spinner from '../components/Spinner'
import { getTasks, reset } from '../features/tasks/taskSlice'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { tasks, isLoading, isError, message } = useSelector(
    (state) => state.tasks
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    //dispatch(getTasks(user))
    console.log(user.email + 'Dashboard');
    dispatch(getTasks())
    // const response = await fetch('/posts/',{
    //   method: "GET",
    //     headers: {
    //       // Authorization: `Bearer ${token}`,
    //       "Content-Type": "application/json",
    //     },
    //     // data: JSON.stringify({username: "bob"})
      
    //   })
    //   console.log(response.data)
      
    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  function TaskReturn({task}){
    if(task.user === user._id){
    return<TaskItem key={task._id} task={task} />
    }
    else{
      return<div></div>
    }
  }

  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>Tasks Dashboard</p>
      </section>

      <TaskForm />

      <section className='content'>
        {tasks.length > 0 ? (
          <div className='goals'>
            {tasks.map((task) => (

            <TaskReturn key={task._id} task={task}/>
          
          
          )

  
        )}
          </div>
        ) : (
          <h3>You have not set any task</h3>
        )}
      </section>
    </>
  )
}

export default Dashboard


// return (
//   <>
//     <section className='heading'>
//       <h1>Welcome {user && user.name}</h1>
//       <p>Tasks Dashboard</p>
//     </section>

//     <TaskForm />

//     <section className='content'>
//       {tasks.length > 0 ? (
//         <div className='goals'>
//           {tasks.map((task) => (


//         <TaskItem key={task._id} task={task} />
        
//         )


//       )}
//         </div>
//       ) : (
//         <h3>You have not set any task</h3>
//       )}
//     </section>
//   </>
// )