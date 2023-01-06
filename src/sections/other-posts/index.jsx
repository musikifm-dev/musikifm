import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import { BlogCard, PodcastCard, VideoCard } from 'sections'
import { Spinner, Stack } from 'react-bootstrap'

const OtherPost = (props) => {
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
      <div>
        <h3>{podcastType ? podcastType : blogType ? blogType : videoType}</h3>
      </div>
      {!podcastType && (
        <Stack gap={4} direction="vertical">
          {type === 'video' && !loader && filteredData.map((item) => <VideoCard key={item.id} data={item} />)}
          {type === 'blog' && !loader && filteredData.map((item) => <BlogCard key={item.id} data={item} />)}
        </Stack>
      )}

      {podcastType && !loader && (
        <div className="row">
          {filteredData.map((item) => (
            <div className="col-sm-12 col-md-6 col-lg-6 mb-3" key={item.id}>
              <PodcastCard data={item} />
            </div>
          ))}
        </div>
      )}
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
