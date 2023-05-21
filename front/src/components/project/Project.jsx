import React from 'react'
import styles from './Project.module.css'

const Project = ({project}) => {
  return (
   <div className={styles.project}>
   <a href="xxx-m1.wsr.ru/">{project.name}</a>
 </div>
  )
}

export default Project