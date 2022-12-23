import { Spinner } from 'react-bootstrap'
import { useLocation, useParams } from 'react-router-dom'
import { useGetBlogDetailQuery } from 'store/api/admin-base'
import { APP } from 'utils/constants'
import OtherPost from '../../../components/Detail/OtherPost'
import styles from './index.module.scss'

export default function BlogDetail() {
  const { id } = useParams()
  const { state } = useLocation()
  
  console.log(state)
  const { data, isLoading, isError } = useGetBlogDetailQuery(id)

  let image = data?.data.attributes.image.data.attributes.url
  const imgBlog = APP.adminBase + image

  if (isLoading) return <Spinner />
  if (isError) return <p>Error...</p>

  return (
    <div className={styles.wrapper}>
      <div className="row">
        <div className="col-md-9">
          <div className={styles.blogDetail}>
            <h1 className={styles.blogDetail__title}>{data?.data.attributes.title}</h1>
            <img src={imgBlog} alt="imgBlogImage" className={styles.blogDetail__img} />
            <p className={styles.blogDetail__content}>{data?.data.attributes.content}</p>
          </div>
        </div>
        <div className="col-md-3">
          <OtherPost />
        </div>
      </div>
    </div>
  )
}
