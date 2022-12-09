import { BlogSlider, HeroSlider, PodcastSlider, VideoSlider } from 'sections'
import styles from './index.module.scss'

const Home = () => {
  return (
    <div className={styles.home}>
      <HeroSlider />
      <PodcastSlider />
      <BlogSlider />
      <VideoSlider />
    </div>
  )
}

export default Home
