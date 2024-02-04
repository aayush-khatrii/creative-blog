import styles from './BlogCard.module.css'

export default function BlogCard({}) {
  return <>
    <div className={styles.cardMain}>
      <div className={styles.blogIMG}></div>
      <div className={styles.blogTitle}>
        <span>Navigating the Digital Landscape: Social Media and Beyond</span>
      </div>
      <div className={styles.ctaBTN}>
        <div>
          <span>Read More</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="25.983" height="25.262" viewBox="0 0 25.983 25.262">
            <path id="Right" d="M23.766,15.229,15.055,6.518l2.3-2.3L29.983,16.853,17.352,29.484l-2.3-2.3,8.711-8.711H4V15.229Z" transform="translate(-4 -4.222)" fill="#000"/>
          </svg>
        </div>
      </div>
      <div className={styles.meta}></div>
    </div>
  </>
}
