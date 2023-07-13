import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTask } from '../features/tasks/taskSlice'
import axios from 'axios'

const API_URL = '/api/tasks/'

function TaskForm() {
  const [formData, setFormData] = useState({description: ''})

  const dispatch = useDispatch()

  const onSubmit = async (e) => {
    e.preventDefault()
    console.log(formData);
    const config = {
      headers: {
        // Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
        'accept' : 'application/json'
      },
    }
    const formdata = new FormData();
    console.log(formData.description);
    formdata.append("description", formData.description)
    await fetch('/posts',{
    method: "POST",
      headers: {
        // Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    body: JSON.stringify({})
    
    }
    
    );
    // const {response} = await axios.post('/posts',
    //   formdata, {
    //   headers: {
    //     // Authorization: `Bearer ${token}`,
    //     'Content-Type': 'multipart/form-data',
    //     'accept' : 'application/json'
    //   }}
    //   )
    // dispatch(createTask({ formData }))
    setFormData({description: ''})
  }

  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='text'>Task</label>
          <input
            type='text'
            name='description'
            id='descriptiton'
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
          />
        </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Add task
          </button>
        </div>
      </form>
    </section>
  )
}

export default TaskForm
