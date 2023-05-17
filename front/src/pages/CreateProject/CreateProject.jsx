import { useEffect, useState } from 'react'
import styles from './CreateProject.module.css'
import Layout from '../../components/Layout/Layout'
import NavBar from '../../components/Navbar/NavBar'

const CreateProject = () => {

   useEffect(() => {
      document.title = 'Create Project'
   }, [])

  return (
    <Layout>
      <NavBar  />
      <div className={styles.create}>
         <div className={styles.elementPanel}>Element panel</div>
         <div className={styles.workspace}>Workspace</div>
         <div className={styles.ProjectStructure }>Project Structure</div>
      </div>
    </Layout>
  )
}

export default CreateProject