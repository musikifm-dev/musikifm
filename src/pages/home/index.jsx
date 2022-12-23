import { BlogSlider, HeroSlider, PodcastSlider, VideoSlider } from 'sections'
import { useGetVideoDataQuery } from 'store/api/admin-base'
import styles from './index.module.scss'

const Home = () => {
  const { isSuccess, data } = useGetVideoDataQuery()

  return (
    <div className={styles.home}>
      <HeroSlider />
      <PodcastSlider title="PODCAST" />
      <BlogSlider title="BLOG" />
      <VideoSlider data={data} loader={isSuccess} title="VIDEO" />
    </div>
  )
}

export default Home
