import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import RegistrationForm from './main/RegistrationForm';
import Nav from './main/Nav';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Nav/>
        <div className="">
          <Routes>
            <Route path="/register/*" element={<RegistrationForm/>}/>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
