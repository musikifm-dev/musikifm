import { Link } from 'react-router-dom';
import Icon from '../../assets/svg';
import { API_URL } from 'utils/URL';
import PropTypes from 'prop-types';

function VideoItem({ item }) {
  const videoImage = API_URL + item.image;
  return (
    <div className="videoBox">
      <Link to={`/video/${item.id}`}>
        <div className="videoBox__image">
          <img src={videoImage} />
          <div id="videoplayicon">
            <Icon name="videoplay" size="64" />
          </div>
        </div>
        <div className="videoBox__content">
          <div className="videoBox__title">
            <h4>{item.title}</h4>
          </div>
          <div className="videoBox__more">
            <div className="hashtagBox">
              <div className="hashtag">
                <span>{item.tag}</span>
              </div>
            </div>
            <button className="videoLink" data-src="">
              more
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}

VideoItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    tag: PropTypes.string,
    image: PropTypes.string,
  }),
};

export default VideoItem;
