import { useGetPodcastDataQuery } from 'store/api/admin-base'
import PodcastOtherItem from 'components/Items/PodcastOtherItems/PodcastOtherItem'
import PropTypes from 'prop-types'

const OtherPodcast = (id) => {
  const { data, isSuccess } = useGetPodcastDataQuery()

  return (
    <div className="podcastOther mt-5">
      <div className="titleDiv">
        <h4>BUNLARI DA BEĞENEBİLİRSİN</h4>
      </div>
      {isSuccess &&
        data
          .filter((f) => f.id !== Number(id))
          .map((item) => {
            return (
              <div key={item.id}>
                <PodcastOtherItem id={id} data={item}></PodcastOtherItem>
              </div>
            )
          })}
    </div>
  )
}

OtherPodcast.propTypes = { id: PropTypes.string }
export default OtherPodcast
