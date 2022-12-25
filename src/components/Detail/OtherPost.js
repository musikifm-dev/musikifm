import BlogItem from 'components/Items/BlogItem'
import { useGetBlogDataQuery } from 'store/api/admin-base'
import { useParams } from 'react-router-dom'

const OtherPost = () => {
  const { id } = useParams()
  const { data, isSuccess } = useGetBlogDataQuery()
  const filteredData = data?.filter((f) => f.id !== Number(id))
  console.log(filteredData)
  return (
    <div className="blog mt-5">
      <div className="titleDiv">
        <h3>OTHER POSTS</h3>
      </div>
      {isSuccess && filteredData.map((item) => <BlogItem data={item} key={item.id} />)}
    </div>
  )
}

export default OtherPost
