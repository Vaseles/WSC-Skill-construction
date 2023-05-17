import React from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom'
import Auth from './pages/Auth/Auth'
import Home from './pages/Home/Home'
import PageNotFound from './pages/PageNotFound/PageNotFound'
import { useAuth } from './hooks/useAuth'
import CreateProject from './pages/CreateProject/CreateProject'

const App = () => {
  const navigate = useNavigate()
  const {isAuth} = useAuth()

  return (
    <>
      <Routes>
        <Route path='/login' element={<Auth/>} />

        <Route path='*' element={<PageNotFound/>} />

        {isAuth ? (
          <>
          <Route path='/' element={<Home/>} />
          <Route path='/create-project' element={<CreateProject/>} />
          </>
        ): (navigate('/'))}
      </Routes>
    </>
  )
}

export default App