import { Spinner, Stack } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { APP } from 'utils/constants'
import OtherPost from 'components/Detail/OtherPost'
import styles from './index.module.scss'
import { EmbedVideo } from 'components/ui'
import Comment from 'components/Comments/Comments'
import Icon from 'assets/svg'

export default function Detail(props) {
  const { data, loader, error, type } = props

  let image = data?.data.attributes.image.data.attributes.url
  const imgBlog = APP.adminBase + image

  if (loader) return <Spinner />
  if (error) return <p>Error...</p>

  return (
    <div className={styles.wrapper}>
      <div className="row">
        <div className="col-12">
          <div className={styles.detail}>
            <h1 className={styles.detail__title}>{data?.data.attributes.title}</h1>
            {type === 'blog' ? (
              <img src={imgBlog} alt="imgBlogImage" className={styles.detail__img} />
            ) : (
              <EmbedVideo embedId={data?.data?.attributes?.url} className={styles.detail__video} />
            )}
          </div>
        </div>
        <div className="col-md-9 px-4">
          <p className={styles.detail__content}>{data?.data.attributes.content}</p>
          <div className="d-flex justify-content-between">
            <Stack direction="horizontal" gap={4}>
              <Stack direction="horizontal" gap={2}>
                <Icon name="share" size="24" stroke={'black'} />
                <span>SHARE</span>
              </Stack>
              <Stack direction="horizontal" gap={2}>
                <Icon name="heartEmpty" size="24" />
                <span>LIKE</span>
              </Stack>
              <Stack direction="horizontal" gap={2}>
                <Icon name="copyLink" size="24" />
                <span>COPY LINK</span>
              </Stack>
            </Stack>
            <Stack direction="horizontal" gap={2}>
              <Icon name="report" size="24" />
              <span>Report</span>
            </Stack>
          </div>
          <Comment detailData={data} loader={loader} />
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
