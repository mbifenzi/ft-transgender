import React from 'react'
import Sidebar from "./components/Sidebar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from "./components/Dashboard"
const App = () => {
  // const activeSidebar = ""
  return (
    <Router>
      <div className="w-screen h-screen bg-global bg-cover ">
        <div className='bg-black bg-opacity-50 w-full h-full'>
          <Routes>
            <Route path="/" element={<Sidebar />}>
              <Route path="/dashboard" element={<> <Sidebar /> <Dashboard /></>} />
              <Route path="/account" element={<> <Sidebar />  <Dashboard /> </>} />
              <Route path="/settings" element={<> <Sidebar /> <Dashboard /></>} />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App