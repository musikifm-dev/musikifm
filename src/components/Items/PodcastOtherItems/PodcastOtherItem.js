import Icon from '../../../assets/svg'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrent, setPlayerType, setState } from 'store/slices/player'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { APP } from 'utils/constants'
import styles from './index.module.scss'


function PodcastOtherItem({ data }) {
  const dispatch = useDispatch()
  const { current,playing } = useSelector((state) => state.player)
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
    <div className={styles.podcastOtherBox}>
      <Link to={`/podcast/${data.id}`} className={styles.podcastOtherBox__image}>
        <div>
          <img src={APP.adminBase + data.image} />
        </div>
        <button className={styles.podcastOtherBox__btn} data-src="" onClick={() => clickHandler(data)}>
            <Icon name={current?.id === data.id && playing === true ? 'pause' : 'play'} size="18" fill="#fff" />
          </button>
      </Link>
      <div className={styles.podcastOtherBox__content}>
        <div className={styles.podcastOtherBox__content_title}>
          <h4>{data.title}</h4>
        </div>
        <div className={styles.podcastOtherBox__player}>
          <div className="timeBox">
            {/* <Icon name="time" size="14" />
                            <span>2:36</span> */}
          </div>
          
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
