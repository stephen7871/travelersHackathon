const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// Create a list of tasks
let tasks = [];
const names = [
  'Emma Johnson',
  'Noah Smith',
  'Olivia Brown',
  // Rest of the names...
];

// Generate random data for each task
for (let i = 0; i < 10; i++) {
  let task = {};
  var mongoose = require('mongoose');
  task.user = new mongoose.mongo.ObjectId('64b17206296e9aad2c176cfd');
  task.teamSize = Math.floor(Math.random() * 10) + 1;
  task.Budget = Math.floor(Math.random() * 100000) + 1;
  task.Workload = Math.floor(Math.random() * 3) + 1;
  task.completionTime = Math.floor(Math.random() * 100) + 1;
  task.description = ['write a blog post', 'design a website', 'create a presentation', 'build a mobile app'][Math.floor(Math.random() * 4)];
  task.complete = Math.floor(Math.random() * 2);
  task.personAssigned = names[Math.floor(Math.random() * names.length)];
  task.dueDate = ['today', 'tomorrow', 'next week', 'next month', 'next year'][Math.floor(Math.random() * 5)];
  task.estimatedDuration = ['1 hour', '2 hours', '3 hours', '4 hours', '6 hours', '12 hours', '24 hours', '48 hours', '72 hours', '1 week', '2 week', '4 week'][Math.floor(Math.random() * 12)];

  // Add the task to the list
  tasks.push(task);
}

// Create a CSV file with the data
const csvWriter = createCsvWriter({
  path: 'tasks.csv',
  header: [
    { id: 'user', title: 'user' },
    { id: 'teamSize', title: 'teamSize' },
    { id: 'Budget', title: 'Budget' },
    { id: 'Workload', title: 'Workload' },
    { id: 'completionTime', title: 'completionTime' },
    { id: 'description', title: 'description' },
    { id: 'complete', title: 'complete' },
    { id: 'personAssigned', title: 'personAssigned' },
    { id: 'dueDate', title: 'dueDate' },
    { id: 'estimatedDuration', title: 'estimatedDuration' }
  ]
});

csvWriter.writeRecords(tasks)
  .then(() => console.log('CSV file created successfully'))
  .catch((error) => console.error(error));
