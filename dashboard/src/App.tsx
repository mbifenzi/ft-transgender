import React from 'react'
import Sidebar from "./components/Sidebar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from "./components/Dashboard"
const App = () => {
  const sidebar = 'w-[300px] h-full bg-black backdrop-blur-[6px] bg-opacity-40 border-r-zinc-700 border-r-4 shadow-2xl text-white'
  return (
    <Router>
      <div className="w-screen h-screen bg-global bg-cover">
        <div className='bg-black bg-opacity-50 w-full h-full flex'>
          <div className={sidebar}>
            <Sidebar />
          </div>
          <div className='w-full h-full flex justify-center items-center' >
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
