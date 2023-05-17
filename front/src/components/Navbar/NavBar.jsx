import styles from './NavBar.module.css'
import style from './../Header/Header.module.css'
import Button from '../ui/Button/Button'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const NavBar = ({}) => {
   const [projectName, setProjectName] = useState('')
   const navigate = useNavigate()

  return (
    <div className={style.header}>
      <div className={styles.header__left}>
         <Button onClick={() => navigate('/') }>Go back</Button>
         <input 
            type='text'
            value = {projectName}
            onChage = {(e) => setProjectName(e.target.value)}
            placeholder='Enter project name'
            required
            />
      </div>
      <nav className={styles.header__right}>

      </nav>
    </div>
  )
}

export default NavBar