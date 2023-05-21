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
        <Route path='/xxx-m1.wsr.ru/login' element={<Auth/>} />

        <Route path='*' element={<PageNotFound/>} />

        {isAuth ? (
          <>
          <Route path='xxx-m1.wsr.ru/' element={<Home/>} />
          <Route path='/xxx-m1.wsr.ru/create-project' element={<CreateProject/>} />
          </>
        ): (navigate('/xxx-m1.wsr.ru/login'))}
      </Routes>
    </>
  )
}

export default App