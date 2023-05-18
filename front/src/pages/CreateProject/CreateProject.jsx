import { useEffect, useState } from 'react'

import styles from './CreateProject.module.css'
import style from './../../components/Header/Header.module.css'

import Layout from '../../components/Layout/Layout'
import { useNavigate } from 'react-router-dom'

import Button from '../../components/ui/Button/Button'


const CreateProject = () => {
  const [projectName, setProjectName] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    document.title = 'Create Project'
  }, [])

  return (
    <Layout>
        <div className={style.header}>
        <div className={styles.header__left}>
          <Button onClick={() => navigate('/') }>Go back</Button>
          <input 
              type='text'
              value = {projectName}
              onChange = {(e) => setProjectName(e.target.value)}
              placeholder='Enter project name'
              required
              />
        </div>
        <nav className={styles.header__right}>

        </nav>
      </div>
      <div className={styles.create}>
         <div className={styles.create_elementPanel}>Element panel</div>
         <div className={styles.create_workspace}>Workspace</div>
         <div className={styles.create_ProjectStructure }>Project Structure</div>
      </div>
    </Layout>
  )
}

export default CreateProject