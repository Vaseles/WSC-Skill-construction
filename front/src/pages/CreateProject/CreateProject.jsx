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

    const handleKeyPress = (e) => {
      if (e.key === 'Escape' ||
      e.key === 'Esc' ||
      e.key === '1') {
        setPlace([])
      }
    }

    document.addEventListener('keypress', handleKeyPress)

    return () => {
      document.addEventListener('keypress', handleKeyPress)
    }
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
    element = ({
      'uni':  Math.floor(Math.random() * 100000000) + 1,
      'element':element,
      'position':{x: 0, y: 0},
      'rotation': 0,
      'light': false,
    })

    setPlace([...place, element])
  }

  // delete Element
  const deleteElement = (e, id) => {
      const updatedMassive = place.filter(item => item.uni !== id)
      setPlace(updatedMassive);
  }

    // delete Element
    const lightElement = (e, uni) => {
     setPlace(prevState => prevState.map(obj => 
      obj.uni === uni
        ? { 
            ...obj,
           light: !obj.light
          }
        : obj
      ))
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
              <h5>All Elements:</h5>
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
                    key={element.element.id} 
                    className={`${styles.place__item} ${element.light ? styles.place__item__light : '' } `} 
                    draggable 
                    style={{width:`${element.element.width}px`, height:`${element.element.height}px`}} 
                  >
                    <h3 draggable={false}>
                    <svg width="30" height="30" viewBox="0 0 62 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.5 62.5L6.03916 62.9407L6.40798 65H8.5V62.5ZM58 62.5V65H61.2251L60.4211 61.8768L58 62.5ZM45 12L47.4211 11.3768L46.8542 9.17481L44.6085 9.53084L45 12ZM4 18.5L30.9517 28.8412L26.4316 0.329756L4 18.5ZM0.0391584 29.4407L6.03916 62.9407L10.9608 62.0593L4.96084 28.5593L0.0391584 29.4407ZM8.5 65H58V60H8.5V65ZM60.4211 61.8768L47.4211 11.3768L42.5789 12.6232L55.5789 63.1232L60.4211 61.8768ZM44.6085 9.53084L25.831 12.5078L26.6139 17.4461L45.3915 14.4692L44.6085 9.53084Z" fill="white"/>
                      </svg>
                    </h3>
                    <img src={`http://127.0.0.1:8000${element.element.svg}`}  alt={element.element.id} draggable={false} style={{width:`${element.element.width}px`, height:`${element.element.height}px`}}/> 
                    <span onClick = {(e) => deleteElement(e, element.uni)}>x</span>
                  </div>
                )}
              </div>
            ): (<h2>Elements Not Found(How George)</h2>)}
         </div>
         <div className={styles.create_ProjectStructure}>
          {place? (
            <div className={styles.create_ProjectStructure__all}>
              <h5>Project structure:</h5>
              {place.map(item => 
                <div 
                tabIndex={0} 
                key={item.element.id} 
                className={`${styles.create__item} ${item.light ? styles.place__item__light : '' }`}  
                onClick={(e) => lightElement(e, item.uni)}
                style = {item.light? {boxShadow: '0 0 10px 1px #f59e0b'}: {boxShadow: ''}}
                >
                  <h2>{item.element.name}</h2>
                  <span onClick = {(e) => deleteElement(e, item.uni)}>x</span>
                </div>  
              )}
            </div>
            ) :(
            <p>Objects Not Found</p>
            )}
         </div>
      </div>
    </Layout>
  )
}

export default CreateProject