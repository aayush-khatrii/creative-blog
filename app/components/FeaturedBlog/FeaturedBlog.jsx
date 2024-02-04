import BlogCard from '../BlogCard/BlogCard'
import styles from './FeaturedBlog.module.css'

export default function FeaturedBlog() {
const asdew = [
    {
        name:"aayushd",
        id:"1"
    },
    {
        name:"aayushd",
        id:"2"
    },
    {
        name:"aayushd",
        id:"3"
    },
    {
        name:"aayushd",
        id:"4"
    },
    {
        name:"aayushd",
        id:"5"
    },
    {
        name:"aayushd",
        id:"6"
    }
]
  return (
    <div className={styles.fbmainWrapper}>
        <div className={styles.featuredTitle}><span>Latest Blog</span></div>
        <div className={styles.blogcardWrapper}>
            {asdew.map(item =>
                <BlogCard key={item.id}/>
            )}
        </div>
    </div>
  )
}
