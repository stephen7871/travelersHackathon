import axios from 'axios'

const API_URL = '/api/tasks/'


const createTask = async (taskData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      'accept' : 'application/json'
    },
  }
  const formdata = new FormData();
  console.log(taskData.description);
  formdata.append("description", taskData.description)
  const {response} = await axios.post(API_URL, 
    
    formdata, config)

  return response.data
}


const getTasks = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get('/posts', config)

  return response.data
}


const deleteTask = async (taskId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + taskId, config)

  return response.data
}

const taskService = {
  createTask,
  getTasks,
  deleteTask,
}

export default taskService