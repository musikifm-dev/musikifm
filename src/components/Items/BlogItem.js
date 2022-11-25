import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { APP } from 'utils/constants'

function BlogItem({ data }) {
  const { id, title, tag, image } = data

  return (
    <div className="blogBox" data-id={id}>
      <Link to={`/blog/${id}`}>
        <div className="blogBox__image">
          <img src={APP.base + image} alt="BlogIMG"/>
        </div>
        <div className="blogBox__content">
          <div className="blogBox__title">
            <h4>{title}</h4>
          </div>
          <div className="blogBox__more">
            <div className="hashtagBox">
              <div className="hashtag">
                <span>{tag}</span>
              </div>
            </div>
            <button className="blogLink" data-src="">
              more
            </button>
          </div>
        </div>
      </Link>
    </div>
  )
}

BlogItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    tag: PropTypes.string,
    image: PropTypes.string,
  }),
}

export default BlogItem
