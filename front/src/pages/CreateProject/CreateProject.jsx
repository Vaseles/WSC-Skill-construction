import { useEffect, useState } from 'react'

import styles from './CreateProject.module.css'
import style from './../../components/Header/Header.module.css'

import Layout from '../../components/Layout/Layout'
import { useNavigate } from 'react-router-dom'

import Button from '../../components/ui/Button/Button'
import { $axios } from '../../api'
import axios from 'axios'


const CreateProject = () => {
  const navigate = useNavigate()

  const [projectName, setProjectName] = useState('')
  const [elements, setElements] = useState([])
  const [place, setPlace] = useState([])

  useEffect(() => {
    document.title = 'Create Project'
    getElements()
  }, [])

  // get elements
  const getElements = async () =>  {
    await $axios.get('/elements').then(res => setElements(res.data.data))
  }

  // Начала перетаскивания, берем и перетаскиваем куды нада
  const handleDragStart = (e, element) => {
    e.dataTransfer.setData('text/plain', JSON.stringify(element))
  }

  // шо будит когда тащим
  const  handleDragOver  = (e) => {
    e.preventDefault()
  }

  // шо будит когда отпустим он кинется
  const handleDrop = (e) => {
    e.preventDefault()
    let element = JSON.parse(e.dataTransfer.getData('text'))
    setPlace([...place, element])
  }

  // delete Element
  const deleteElement = (id) => {
    console.log(id)
  }

  return (
    <Layout>
        <div className={style.header}>
        <div className={styles.header__left}>
          <a href="/" className='btn' >Go Back</a>
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

        {/* elements panel */}
         <div className={styles.create_elementPanel}>
         {elements? (
            <div className={styles.create_elements}>
              {elements.map(element => 
                <div key={element.id}  className={styles.create__element} draggable style={{width:`${element.width}px`, height:`${element.height}px`}} onDragStart  = {(e) => handleDragStart(e, element)}>
                  <img src={`http://127.0.0.1:8000${element.svg}`}  alt={element.id} draggable={false} style={{width:`${element.width}px`, height:`${element.height}px`}}/> <h3 draggable={false}>{element.name}</h3>
                </div>
              )}
            </div>
          ): (<h2>Elements Not Found(How George)</h2>)}
          </div>

         <div className={styles.create_workspace}>
            {place ? (
              <div className={styles.place} onDragOver={handleDragOver} onDrop={handleDrop}>
                {place.map(element => 
                  <div 
                    key={element.id} 
                    onDoubleClick={deleteElement(element.id)}   
                    className={styles.place__item} 
                    draggable 
                    style={{width:`${element.width}px`, height:`${element.height}px`}} 
                    onDragStart  = {(e) => handleDragStart(e, element)}
                    
                  >
                    <img src={`http://127.0.0.1:8000${element.svg}`}  alt={element.id} draggable={false} style={{width:`${element.width}px`, height:`${element.height}px`}}/> <h3 draggable={false}>{element.name}</h3>
                  </div>
                )}
              </div>
            ): (<h2>Elements Not Found(How George)</h2>)}
         </div>
         <div className={styles.create_ProjectStructure }>Project Structure</div>
      </div>
    </Layout>
  )
}

export default CreateProject