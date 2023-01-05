import Comment from 'components/Comments/Comments'
import { useParams } from 'react-router-dom'
import Detail from 'sections/blog-video-detail'
import { useGetVideoDetailQuery } from 'store/api/admin-base'

export default function VideoDetail() {
  const { id } = useParams()
  const { data, isLoading, isError } = useGetVideoDetailQuery(id)
  console.log(data)

  return (
    <>
      <Detail data={data} loader={isLoading} error={isError} type="video" />
      <Comment id={id} detailData={data} />
    </>
  )
}
