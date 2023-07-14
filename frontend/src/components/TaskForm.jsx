import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTask } from '../features/tasks/taskSlice'
import axios from 'axios'
import { useSelector } from 'react-redux'
const API_URL = '/api/tasks/'

function TaskForm() {
  const [formData, setFormData] = useState({description: '',teamSize: '',budget:'',workLoad:''})
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const onSubmit = async (e) => {
    e.preventDefault()
    // console.log(formData);
    const config = {
      headers: {
        // Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
        'accept' : 'application/json'
      },
    }
    const formdata = new FormData();
    // console.log(formData.description);
    // console.log(user?._id);
    formdata.append("description", formData.description)
    // const username = localStorage.getItem('user');
    await fetch('/posts',{
    method: "POST",
      headers: {
        // Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    body: JSON.stringify({description: formData.description, username: user?.email})
    
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
          <label htmlFor='text'>Task search by description</label>
          {/* <input
            type='text'
            name='description'
            id='descriptiton'
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
          /> */}

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
