import { useEffect, useState } from 'react'
import styles from './Home.module.css'
import Layout from '../../components/Layout/Layout'
import Header from '../../components/Header/Header'
import { $axios } from '../../api'
import Project from '../../components/project/Project'

const Home = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    document.title = 'Projects'

    getProjects()
  }, [])

  const getProjects = async () => {
    await $axios.get('/projects')
      .then(res => {
        console.log(res.data)
        setProjects(res.data.data)
      })
      .catch(err => console.error(err))
  }

  return (
    <Layout>
      <Header/>
      {projects? (
        <div className={styles.projects}>
          {projects.map(project =>
          <Project project={project} key={project.id} />
            )}
        </div>
      ): (<></>)}
    </Layout>
  )
}

export default Home