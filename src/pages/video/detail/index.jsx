import Icon from 'assets/svg'
import clsx from 'clsx'
import Comment from 'components/Comments/Comments'
import OtherPost from 'components/Detail/OtherPost'
import { EmbedVideo } from 'components/ui'
import { useState } from 'react'
import { Button, Spinner, Stack } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useGetVideoDataQuery, useGetVideoDetailQuery, useGetVideoHomeSliderQuery } from 'store/api/admin-base'
import { setState } from 'store/slices/player'
import { APP } from 'utils/constants'
import { useWindowSize } from 'utils/hooks/useWindowSize'
import styles from './index.module.scss'

export default function VideoDetail() {
  const { id } = useParams()
  const { playing } = useSelector((state) => state.player)
  const { data } = useGetVideoHomeSliderQuery()
  const { data: videoDetailData, isLoading, isError } = useGetVideoDetailQuery(id)
  const { data: videosData, isLoading: videosIsLoading, isError: videosIsError } = useGetVideoDataQuery()
  const [open, setOpen] = useState(false)
  const { isMobile } = useWindowSize()
  const dispatch = useDispatch()

  const clickHandler = () => {
    setOpen(true)
    dispatch(setState({ playing: !playing }))
  }

  console.log(videosData)

  // let image = data?.data.attributes.image.data.attributes.url
  // const imgBlog = APP.adminBase + image

  if (isLoading) return <Spinner />
  if (isError) return <p>Error...</p>

  return (
    <div className={styles.wrapper}>
      <div className="row">
        <div className="col-12">
          <section>
            {open ? (
              <EmbedVideo embedId={data?.[0].videourl} className={styles.embedVideo} />
            ) : (
              <div className={styles.image}>
                <img src={APP.adminBase + data?.[0].image} alt="homeSliderImage" className={styles.image__item} />
                <Stack gap={5} className={clsx(styles.absolute, styles.content)}>
                  <Stack gap={3}>
                    <div className={clsx(styles.image__title)}>{data?.[0].title}</div>
                    <div className={clsx(styles.image__description)}>{data?.[0].description}</div>
                  </Stack>
                  <Stack direction="horizontal" gap={isMobile ? 3 : 4} className={styles.btn}>
                    <Button variant="warning" className={clsx(styles.btn__item, styles.orange)} onClick={clickHandler}>
                      WATCH VIDEO
                    </Button>
                    <Button variant="secondary" className={styles.btn__item}>
                      READ MORE
                    </Button>
                  </Stack>
                </Stack>
              </div>
            )}
          </section>
        </div>
        <section className={clsx('col-md-9 px-4', styles.contentSection)}>
          <p className={styles.contentSection__content}>{videoDetailData?.data.attributes.content}</p>
          <div className={clsx(styles.contentSectionFeedback, 'd-flex justify-content-between')}>
            <Stack direction="horizontal" gap={4}>
              <Stack direction="horizontal" gap={2}>
                <Icon name="share" size="24" stroke={'black'} className={styles.contentSection__shareIcon} />
                <span className={styles.contentSection__feedback}>SHARE</span>
              </Stack>
              <Stack direction="horizontal" gap={2}>
                <Icon name="heartEmpty" className={styles.contentSection__heartIcon} />
                <span className={styles.contentSection__feedback}>LIKE</span>
              </Stack>
              <Stack direction="horizontal" gap={2}>
                <Icon name="copyLink" className={styles.contentSection__copyIcon} />
                <span className={styles.contentSection__feedback}>COPY LINK</span>
              </Stack>
            </Stack>
            <Stack direction="horizontal" gap={2}>
              <Icon name="report" className={styles.contentSection__reportIcon} />
              <span className={styles.contentSection__feedback}>Report</span>
            </Stack>
          </div>
          <Comment detailData={data} loader={isLoading} />
        </section>
        <div className="col-md-3">
          <OtherPost data={videosData} loader={videosIsLoading} error={videosIsError} type="video" />
        </div>
      </div>
    </div>
  )
}
