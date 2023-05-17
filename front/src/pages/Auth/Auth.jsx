import { useEffect, useState } from "react"
import Layout from "../../components/Layout/Layout"
import styles from './Auth.module.css'
import Button from "../../components/ui/Button/Button"
import { $axios } from "../../api"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useAuth } from "../../hooks/useAuth"


const Auth = () => {
  // components
  const [data, setData] = useState({
    login: '',
    pin: ''
  })
  const [error, setError] = useState('');

  const navigate = useNavigate()
  const {setIsAuth} = useAuth()

  useEffect(() =>{
    // chage title
    document.title = 'Login Page'
  }, [])

  // 
  const auth = async (e) => {
    e.preventDefault()
    console.log(data)
    await $axios.post('/login', {
      'login': data.login,
      'pin': data.pin
    }).then(res  => {
      console.log(res.data.data)

      localStorage.setItem('Quackity', res.data.data.token)
      setIsAuth(true)

      navigate('/')
      window.location.reload()

    }).catch(err => {
      console.error(err)
      setError(`${err.response.status} - ${err.response.data.message}`)
    })
  }

  return (
    <Layout >
      <form action="" className={styles.form} >
        <h2>Login</h2>
        <p>{error? <div className={styles.error}>error</div>: '' }</p>
        <input 
          type="text" 
          placeholder="enter your login..." 
          name="login"
          value={data.login}
          onChange = {e => setData({...data, login: e.target.value})}
          required
          />
        <input 
          type="password" 
          placeholder="enter your pin..." 
          name="pin"
          value={data.pin}
          onChange = {e => setData({...data, pin: e.target.value})}
          required
          />
          <Button
            onClick = {auth}>Continue</Button>
      </form>
    </Layout>
  )
}

export default Auth