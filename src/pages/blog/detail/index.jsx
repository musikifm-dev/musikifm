import Comment from 'components/Comments/Comments'
import { useParams } from 'react-router-dom'
import Detail from 'sections/blog-video-detail'
import { useGetBlogDetailQuery } from 'store/api/admin-base'

export default function BlogDetail() {
  const { id } = useParams()
  const { data, isLoading, isError } = useGetBlogDetailQuery(id)

  return (
    <>
      <Detail data={data} loader={isLoading} error={isError} type="blog" />
    </>
  )
}
