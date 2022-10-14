import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function BlogItem({ item }) {
  const blogImage = 'http://localhost:1337' + item.image;

  return (
    <div className="blogBox" data-id={item.id}>
      <Link to={`/blog/${item.id}`}>
        <div className="blogBox__image">
          <img src={blogImage} />
        </div>
        <div className="blogBox__content">
          <div className="blogBox__title">
            <h4>{item.title}</h4>
          </div>
          <div className="blogBox__more">
            <div className="hashtagBox">
              <div className="hashtag">
                <span>{item.tag}</span>
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
}

BlogItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    tag: PropTypes.string,
    image: PropTypes.string,
  }),
};

export default BlogItem;
