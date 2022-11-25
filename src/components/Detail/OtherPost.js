import BlogItem from 'components/Items/BlogItem'
import { useGetBlogDataQuery } from 'store/api/data'
import PropTypes from 'prop-types'

const OtherPost = (id) => {
  const { data, isSuccess } = useGetBlogDataQuery()
  const filteredData = data?.map((f) => f.id !== id)

  return (
    <div className="blog mt-5">
      <div className="titleDiv">
        <h3>OTHER POSTS</h3>
      </div>
      {isSuccess &&
        filteredData.map((item, i) => (
          <div className="other" key={i}>
            <BlogItem data={item} key={4} />
          </div>
        ))}
    </div>
  )
}

OtherPost.propTypes = {
  id: PropTypes.string,
}

export default OtherPost
