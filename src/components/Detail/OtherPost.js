import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import { BlogCard, VideoCard } from 'sections'
import { Spinner, Stack } from 'react-bootstrap'
import styles from './index.module.scss'

const OtherPost = (props) => {
  const { data, loader, error, type } = props
  const { id } = useParams()
  const filteredData = data?.filter((f) => f.id !== Number(id))

  if (loader) return <Spinner />
  if (error) return <p>Error...</p>

  return (
    <div className="blog mt-5">
      <div className="titleDiv">
        <h3>OTHER POSTS</h3>
      </div>
      <Stack gap={4} direction="vertical">
        {type === 'video' &&
          !loader &&
          filteredData.map((item) => <VideoCard key={item.id} data={item} className={styles.card} />)}
        {type === 'blog' && !loader && filteredData.map((item) => <BlogCard key={item.id} data={item} />)}
      </Stack>
    </div>
  )
}

OtherPost.propTypes = {
  data: PropTypes.any,
  loader: PropTypes.bool,
  error: PropTypes.bool,
  type: PropTypes.string,
}

export default OtherPost
