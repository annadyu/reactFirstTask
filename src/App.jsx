import { useState } from 'react'
import Task from './components/task'
import Footer from './components/Footer'
import TaskFilter from './components/TasksFilter'
import TaskList from './components/taskList'
import NewTaskForm from './components/NewTaskForm'
import './App.css'

function App() {
  return (
    <>
      <NewTaskForm />
      <TaskList />
      <Footer />
    </>
  )
}

export default App
