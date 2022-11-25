import { Link } from 'react-router-dom'
import Icon from '../../assets/svg'
import { API_URL } from 'utils/URL'
import PropTypes from 'prop-types'
import { route } from 'utils/constants'

export default function VideoItem({ data }) {
  return (
    <div className="videoBox">
      <Link to={`${route.video}/${data.id}`}>
        <div className="videoBox__image">
          <img src={API_URL + data.image} />
          <div id="videoplayicon">
            <Icon name="videoplay" size="64" />
          </div>
        </div>
        <div className="videoBox__content">
          <div className="videoBox__title">
            <h4>{data.title}</h4>
          </div>
          <div className="videoBox__more">
            <div className="hashtagBox">
              <div className="hashtag">
                <span>{data.tag}</span>
              </div>
            </div>
            <button className="videoLink" data-src="">
              more
            </button>
          </div>
        </div>
      </Link>
    </div>
  )
}

VideoItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    tag: PropTypes.string,
    image: PropTypes.string,
  }),
}
