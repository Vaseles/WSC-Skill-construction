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

      navigate('/login')
      window.location.reload()
   } 

  return (
    <header className={styles.header}>
      <Button onClick={logout}>Logout</Button>
      <Button onClick={() => navigate('/create-project')} >Add A New Project</Button>
    </header>
  )
}

export default Header