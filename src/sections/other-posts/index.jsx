import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import { BlogCard, PodcastCard, VideoCard } from 'sections'
import { Spinner } from 'react-bootstrap'
import styles from './index.module.scss'

const OtherPosts = (props) => {
  const { data, loader, error, type } = props
  const { id } = useParams()
  const filteredData = data?.filter((f) => f.id !== Number(id))

  const podcastType = type === 'podcast' && 'MORE PODCASTS'
  const blogType = type === 'blog' && 'OTHER POSTS'
  const videoType = type === 'video' && 'OTHER VIDEOS'

  if (loader) return <Spinner />
  if (error) return <p>Error...</p>

  return (
    <div>
      <h3 className={styles.otherTitle}>{podcastType ? podcastType : blogType ? blogType : videoType}</h3>

      {!podcastType && (
        <div className={styles.card}>
          {videoType && !loader && filteredData.map((item) => <VideoCard key={item.id} data={item} />)}
          {blogType && !loader && filteredData.map((item) => <BlogCard key={item.id} data={item} />)}
        </div>
      )}

      {podcastType && !loader && (
        <div className={styles.podcastSection}>
          {filteredData.map((item) => (
            <div className={styles.podcastSection_box} key={item.id}>
              <PodcastCard data={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

OtherPosts.propTypes = {
  data: PropTypes.any,
  loader: PropTypes.bool,
  error: PropTypes.bool,
  type: PropTypes.string,
}

export default OtherPosts
