import { Spinner } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { APP } from 'utils/constants'
import OtherPost from 'components/Detail/OtherPost'
import styles from './index.module.scss'
import { EmbedVideo } from 'components/ui'

export default function Detail(props) {
  const { data, loader, error, type } = props

  let image = data?.data.attributes.image.data.attributes.url
  const imgBlog = APP.adminBase + image

  if (loader) return <Spinner />
  if (error) return <p>Error...</p>

  return (
    <div className={styles.wrapper}>
      <div className="row">
        <div className="col-md-9">
          <div className={styles.detail}>
            <h1 className={styles.detail__title}>{data?.data.attributes.title}</h1>
            {type === 'blog' ? (
              <img src={imgBlog} alt="imgBlogImage" className={styles.detail__img} />
            ) : (
              <EmbedVideo embedId={data?.data?.attributes?.url} />
            )}
            <p className={styles.detail__content}>{data?.data.attributes.content}</p>
          </div>
        </div>
        <div className="col-md-3">
          <OtherPost />
        </div>
      </div>
    </div>
  )
}

Detail.propTypes = {
  data: PropTypes.any,
  loader: PropTypes.bool,
  error: PropTypes.bool,
  type: PropTypes.string,
}
