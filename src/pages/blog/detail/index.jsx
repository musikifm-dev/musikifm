import { useGetBlogDataQuery, useGetBlogDetailQuery } from 'store/api/admin-base'
import Icon from 'assets/svg'
import clsx from 'clsx'
import Comment from 'components/Comments/Comments'
import { EmbedVideo } from 'components/ui'
import { Stack } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { OtherPosts } from 'sections'
import styles from './index.module.scss'
import { APP } from 'utils/constants'

export default function BlogDetail() {
  const { id } = useParams()
  const { data, isLoading } = useGetBlogDetailQuery(id)
  const { data: blogsData, isLoading: blogsIsLoading, isError: blogsIsError } = useGetBlogDataQuery()
console.log(data);
  return (
    <div className={styles.wrapper}>
      <div className="col-12">
        <div className="d-flex">
          <div className="col-md-9">
            <section className={styles.headerSection}>
              <header>{data?.data.attributes.title}</header>
              {data?.data.attributes.video !== null ? (
                <EmbedVideo embedId={data?.data.attributes.video} className={styles.embedVideo} />
              ) : (
                <img
                  src={APP.adminBase + data?.data.attributes.image.data.attributes.url}
                  className={styles.headerSection__img}
                />
              )}
            </section>
            <section className={styles.contentSection}>
              <p className={styles.contentSection__content}>{data?.data.attributes.content}</p>
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
                  <span className={clsx(styles.contentSection__feedback, styles.report)}>Report</span>
                </Stack>
              </div>
              <Comment detailData={data} loader={isLoading} />
            </section>
          </div>

          <section className={clsx('col-md-3', styles.otherPostsSection)}>
            <OtherPosts data={blogsData} loader={blogsIsLoading} error={blogsIsError} type="blog" />
          </section>
        </div>
      </div>
    </div>
  )
}
