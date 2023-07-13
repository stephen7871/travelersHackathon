const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://stephenmcn787:8PL7BWtaGOHiQnYP@cluster0.oivfgyf.mongodb.net/?retryWrites=true&w=majority")

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDB
