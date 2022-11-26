import BlogItem from 'components/Items/BlogItem'
import { useGetBlogDataQuery } from 'store/api/data'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'

const OtherPost = () => {
  const { id } = useParams()
  const { data, isSuccess } = useGetBlogDataQuery()

  return (
    <div className="blog mt-5">
      <div className="titleDiv">
        <h3>OTHER POSTS</h3>
      </div>
      {isSuccess &&
        data
          .filter((f) => f.id !== Number(id))
          .map((item) => {
            return (
              <div className="other" key={item.id}>
                <BlogItem data={item} />
              </div>
            )
          })}
    </div>
  )
}

OtherPost.propTypes = {
  id: PropTypes.string,
}

export default OtherPost
