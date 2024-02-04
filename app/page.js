import styles from './page.module.css'
import Hero from './components/Hero/Hero.jsx'
import FeaturedBlog from './components/FeaturedBlog/FeaturedBlog'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedBlog />
    </>
  )
}
