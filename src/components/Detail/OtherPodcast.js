import { useGetPodcastDataQuery } from 'store/api/admin-base'
import PodcastOtherItem from 'components/Items/PodcastOtherItems/PodcastOtherItem'
import PropTypes from 'prop-types'

const OtherPodcast = (id) => {
  const { data, isSuccess } = useGetPodcastDataQuery()

  return (
    <div className="podcastOther">
      <div className="titleDiv">
        <h4>MORE PODCAST</h4>
      </div>
      <div className="podcastOther__section">
      {isSuccess &&
        data
          .filter((f) => f.id !== Number(id))
          .map((item) => {
            return (
              <div key={item.id} className="podcastOther__box">
                <PodcastOtherItem id={id} data={item}></PodcastOtherItem>
              </div>
            )
          })} 
      </div> 
     
    </div>
  )
}

OtherPodcast.propTypes = { id: PropTypes.string }
export default OtherPodcast
