const asyncHandler = require('express-async-handler')

const Task = require('../models/taskModel')
const User = require('../models/userModel')


const getTasks = asyncHandler(async (req, res) => {
  // const task = await Task.find({ user: req.user?.id })
  
  const task = await Task.find({ user: req.query.id  })
  console.log("here");
  console.log(JSON.stringify(req.query.id));
  console.log(JSON.stringify(task))
  // const task = await Task.find({ user: req.data.usename })
  res.json(task)
})


const setTask = async (req, res) => {
  // if (!req.body.description) {
  //   res.status(400)
  //   throw new Error('Please add a description')
  // }
  console.log();
  const task = await Task.create({
    description: req.body.description,
    user: req.body.username,
    teamSize: req.body.teamSize,
    budget: req.body.budget,
    workload: req.body.workload,
    completionTime: req.body.completionTime,
    
    complete: req.body.complete,
    personAssigned: req.body.personAssigned,
    dueDate: req.body.dueDate,
    estimatedDuration: req.body.estimatedDuration

  })

  res.status(200).json(task)
}


const updateTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id)

  if (!task) {
    res.status(400)
    throw new Error('Task not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the task user
  if (task.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedTask)
})

// @desc    Delete task
// @route   DELETE /api/tasks/:id
// @access  Private
const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id)
  console.log("delete called" + JSON.stringify(req.params.id));
  if (!task) {
    res.status(400)
    throw new Error('task not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the task user
  if (task.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  await task.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getTasks,
  setTask,
  updateTask,
  deleteTask,
}
