import Icon from 'assets/svg'
import clsx from 'clsx'
import { Button, Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useGetPodcastDataQuery, useGetPodcastDetailQuery } from 'store/api/admin-base'
import { APP } from 'utils/constants'
import styles from './index.module.scss'
import Comment from 'components/Comments/Comments'
import { OtherPosts } from 'sections'

function PodcastDetail() {
  const { id } = useParams()
  const { data, isLoading, isError } = useGetPodcastDetailQuery(id)
  const { data: podcastData, isLoading: podcastIsLoading } = useGetPodcastDataQuery()

  if (isLoading) return <Spinner animation="grow" />
  if (isError) return <p>Error...</p>

  var imgPodcast = APP.adminBase + data?.data?.attributes.image.data.attributes.url

  return (
    <div className={styles.wrapper}>
      <div className={styles.podcastDetail}>
        <div className={styles.podcastContent}>
          <section className={clsx(styles.podcastSection, 'bg-white')}>
            <div className={clsx(styles.podcastSection__left)}>
              <img src={imgPodcast} alt="podcastIMG" />
            </div>
            <div className={clsx(styles.podcastSection__middle)}>
              <div>
                <div>
                  <h2 className={styles.podcastSection__middle_title}>{data?.data?.attributes.songname}</h2>
                </div>
                <div>
                  <h5 className={styles.podcastSection__middle_artist}>{data?.data?.attributes.artist}</h5>
                </div>
              </div>
              <div className={styles.podcastSection__middle_tags}>
                <Button variant="secondary" className={styles.genre}>
                  #Techno
                </Button>
                <Button variant="secondary" className={styles.genre}>
                  #Disco
                </Button>
                <Button variant="secondary" className={styles.genre}>
                  #Derenza
                </Button>
                <span className={styles.more}>
                  more <Icon name="morearrow" size={8} />
                </span>
              </div>
            </div>
            <div className={clsx(styles.podcastSection__right, 'd-flex justify-content-around align-items-end')}>
              <div className="d-flex align-items-center">
                <Icon name="wholistened" size={15} />
                <div className={styles.podcastSection__text}>320</div>
              </div>
              <div className="d-flex align-items-center">
                <Icon name="wholiked" size={15} />
                <div className={styles.podcastSection__text}>23</div>
              </div>
              <div className="d-flex align-items-center">
                <Icon name="share" size={15} stroke="#000" />
                <div className={styles.podcastSection__text}>Share</div>
              </div>
            </div>
          </section>

          <section>
            <div className={styles.podcastSection__paragraph}>
              <p className={styles.podcastSection__paragraph_p}>{data?.data?.attributes.description}</p>
            </div>
          </section>

          <div className={styles.podcastIcon}>
            <div className={styles.podcastIcon__right}>
              <button className={styles.podcastIcon__right_btn}>
                <Icon name="share" size={15} stroke="#000" />
                <span>SHARE</span>
              </button>
              <button className={styles.podcastIcon__right_btn}>
                <Icon name="like" size={15} stroke="#000" />
                <span>LİKE</span>
              </button>
              <button className={styles.podcastIcon__right_btn}>
                <Icon name="copyLink" size={15} stroke="#000" />
                <span>COPY LİNK</span>
              </button>
            </div>
            <div className={styles.podcastIcon__left}>
              <button className={styles.podcastIcon__left_btn}>
                <Icon name="report" size={15} stroke="#00000033" />
                <span>Report</span>
              </button>
            </div>
          </div>
          <Comment id={id} />
        </div>
        <div className={styles.podcastOther}>
          <OtherPosts data={podcastData} loader={podcastIsLoading} type="podcast" />
        </div>
      </div>
    </div>
  )
}
export default PodcastDetail
