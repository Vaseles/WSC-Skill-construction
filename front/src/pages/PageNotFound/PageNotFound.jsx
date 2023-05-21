import styles from './PageNotFound.module.css'
import Layout from '../../components/Layout/Layout'
import { Link, NavLink } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <Layout>
      <div className={styles.notfound}>
        <h1>Page Not Found</h1>
        <p>Go To <a className='link' href='/xxx-m1.wsr.ru/login'>Login</a></p>
      </div>
    </Layout>
  )
}

export default PageNotFound