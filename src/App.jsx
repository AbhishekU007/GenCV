import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import SignInPage from './components/SignInPage'
import Dashboard from './components/Dashboard'

function App() {

  return (
    <>
    {/* <Navbar/> */}
    <h1>Main Page</h1>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/auth/sign-in' element={<SignInPage/>}/>
          <Route path='/auth/sign-in' element={<SignInPage/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      
    </>
  )
}

export default App
