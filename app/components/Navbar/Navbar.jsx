import styles from './Navbar.module.css'
import Image from 'next/image'

export default function Navbar() {
  return <>
    <div className={styles.NavWrapper}>
      <div className={styles.left}>
        <div className={styles.hamburger}>
          <span className={`${styles.hambLine}`}></span>
          <span className={`${styles.hambLine}`}></span>
          <span className={`${styles.hambLine}`}></span>
        </div>
        <div className={styles.brand}>
          <span>Creative Blog</span>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.searchBox}>
          <div className={styles.placeholder}><span>Search Blogs</span></div>
          <div className={styles.searchRight}>
            <div className={styles.shortKey}><span>Ctrl + K</span></div>
            <div className={styles.searchIco}>
              <svg xmlns="http://www.w3.org/2000/svg" width="25.848" height="25.848" viewBox="0 0 25.848 25.848">
                <path id="Path_34" data-name="Path 34" d="M13.452,2A11.452,11.452,0,1,1,2,13.452,11.456,11.456,0,0,1,13.452,2Zm0,20.359a8.907,8.907,0,1,0-8.907-8.907A8.9,8.9,0,0,0,13.452,22.359Zm10.8.09,3.6,3.6-1.8,1.8-3.6-3.6Z" transform="translate(-2 -2)" fill="#161616" opacity="0.7"/>
              </svg>
            </div>
          </div>
        </div>
        <div className={styles.navbarCTA}>
          Login
        </div>
      </div>
    </div>
  </>
}
