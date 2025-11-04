import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
