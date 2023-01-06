import Icon from '../../../assets/svg'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrent, setPlayerType, setState } from 'store/slices/player'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { APP } from 'utils/constants'

function PodcastOtherItem({ data }) {
  const dispatch = useDispatch()
  const { current, playing } = useSelector((state) => state.player)
  const clickHandler = (val) => {
    dispatch(setPlayerType(true)) // setPodcast --> true
    dispatch(
      setCurrent({
        image: val.image,
        artist: val.title,
        song: val.title, // song name
        sound: val.title,
        description: val.description,
        src: val.src,
        id: val.id,
      }),
    )
    dispatch(setState({ playing: !playing }))
  }

  return (
    <div className="podcastBox">
      <Link to={`/podcast/${data.id}`}>
        <div className="podcastBox__image">
          <img src={APP.adminBase + data.image} />
        </div>
      </Link>
      <div className="podcastBox__content">
        <div className="podcastBox__title">
          <h4>{data.title}</h4>
        </div>
        <div className="podcastBox__info">
          <p>{data.description}</p>
        </div>
        <div className="podcastBox__player">
          <div className="timeBox">
            {/* <Icon name="time" size="14" />
                      <span>2:36</span> */}
          </div>
          <button className="PlayPodcast" data-src="" onClick={() => clickHandler(data)}>
            <Icon name={current?.id === data.id && playing === true ? 'pause' : 'play'} size="18" />
          </button>
        </div>
      </div>
    </div>
  )
}

PodcastOtherItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    tag: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
  }),
}

export default PodcastOtherItem
