import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Card = ({ card }) => {
  const blogImage = 'http://localhost:1337' + card.image;

  return (
    <div className="blogBox" data-id={card.id}>
      <Link to={`/blog/${card.id}`}>
        <div className="blogBox__image">
          <img src={blogImage} />
        </div>
        <div className="blogBox__content">
          <div className="blogBox__title">
            <h4>{card.title}</h4>
          </div>
          <div className="blogBox__more">
            <div className="hashtagBox">
              <div className="hashtag">
                <span>{card.tag}</span>
              </div>
            </div>
            <button className="blogLink" data-src="">
              more
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    tag: PropTypes.string,
    image: PropTypes.string,
  }),
};

export default Card;
