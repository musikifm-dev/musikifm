import { BlogSlider, HeroSlider, PodcastSlider, VideoSlider } from 'sections'
import styles from './index.module.scss'

const Home = () => {
  return (
    <div className={styles.home}>
      <HeroSlider />
      <PodcastSlider title="PODCAST" />
      <BlogSlider title="BLOG" />
      <VideoSlider title="VIDEO" />
    </div>
  )
}

export default Home
