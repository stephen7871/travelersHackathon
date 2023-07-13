const mongoose = require('mongoose')

const taskSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    teamSize: {
      type: Number,
      required: true,
    },
    budget: {
      type: Number,
      required: true,
    },
    workload: {
      type: String,
      required: true,
    },
    completionTime: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    complete: {
      type: Number,
      required: true,
    },
    personAssigned: {
      type: String,
      required: true,
    },
    dueDate: {
      type: String,
      required: true,
    },
    estimatedDuration: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Task', taskSchema)
