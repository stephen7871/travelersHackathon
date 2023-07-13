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
      required: [true, 'Please add a text value'],
    },
    Budget: {
      type: Number,
      required: [true, 'Please add a text value'],
    },
    Workload: {
      type: String,
      required: [true, 'Please add a text value'],
    },
    completionTime: {
      type: Number,
      required: [true, 'Please add a text value'],
    },
    description: {
      type: String,
      required: [true, 'Please add a text value'],
    },
    complete: {
      type: Number,
      required: [true, 'Please add a text value'],
    },
    personAssigned: {
      type: String,
      required: [true, 'Please add a text value'],
    },
    dueDate: {
      type: String,
      required: [true, 'Please add a text value'],
    },
    estimatedDuration: {
      type: String,
      required: [true, 'Please add a text value'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Task', taskSchema)
