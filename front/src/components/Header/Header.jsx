import styles from './Header.module.css'
import Button from '../ui/Button/Button'
import { useAuth } from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const Header = () => {
   const {setIsAuth} = useAuth()
   const navigate = useNavigate()

   const logout = () => {
      localStorage.removeItem('Quackity')
      setIsAuth(false)

      navigate('/xxx-m1.wsr.ru/login')
      window.location.reload()
   } 

  return (
    <header className={styles.header}>
      <Button onClick={logout}>Logout</Button>
      <a href='/xxx-m1.wsr.ru/create-project' className='btn' >Add A New Project</a>
    </header>
  )
}

export default Header