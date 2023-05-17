import styles from './Layout.module.css'

const Layout = ({children}) => {
  return (
    <div className={styles.page}>{children}</div>
  )
}

export default Layout