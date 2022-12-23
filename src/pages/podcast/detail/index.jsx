import Icon from 'assets/svg'
import clsx from 'clsx'
import OtherPost from 'components/Detail/OtherPost'
import { Button, Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useGetPodcastDetailQuery } from 'store/api/data'
import { APP } from 'utils/constants'
import styles from './index.module.scss'
import Comment from 'components/Comments/Comments'

function PodcastDetail() {
  const { id } = useParams()
  const { data, isLoading, isError } = useGetPodcastDetailQuery(id)

  if (isLoading) return <Spinner animation="grow" />
  if (isError) return <p>Error...</p>

  var imgPodcast = APP.base + data?.data?.attributes.image.data.attributes.url

  return (
    <div className={styles.wrapper}>
      <div className="row">
        <div className="col-md-9 px-5">
          <section className={clsx(styles.podcastSection, 'row bg-white')}>
            <div className="col-md-2">
              <img src={imgPodcast} alt="podcastIMG" className="w-100" />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-between ">
              <div className="mt-4">
                <div>
                  <h2 className={styles.podcastSection__title}>{data?.data?.attributes.songname}</h2>
                </div>
                <div>
                  <h5 className={styles.podcastSection__artist}>{data?.data?.attributes.artist}</h5>
                </div>
              </div>
              <div className="d-inline-flex align-items-center mb-4">
                <Button variant="secondary" className={styles.genre}>
                  #Techno
                </Button>
                <span className={styles.more}>more &gt;</span>
              </div>
              {/* <div className="podcastSection__tags"></div> */}
            </div>
            <div className="col-md-4 d-flex justify-content-around align-items-end">
              <div className="d-flex align-items-center">
                <Icon name="headphone" size={15} />
                <div className={styles.podcastSection__text}>320</div>
              </div>
              <div className="d-flex align-items-center">
                <Icon name="heartEmpty" size={15} />
                <div className={styles.podcastSection__text}>23</div>
              </div>
              <div className="d-flex align-items-center">
                <Icon name="share" size={15} />
                <div className={styles.podcastSection__text}>Share</div>
              </div>
            </div>
          </section>

          <section>
            <div className="row bg-white mt-5 p-3">
              <div className="p-5">
                <p className={styles.podcastSection__paragraph}>{data?.data?.attributes.description}</p>
              </div>
            </div>
          </section>
          <Comment podcastId={id} />
        </div>
        <div className="col-md-3">
          <OtherPost id={id} />
        </div>
      </div>
    </div>
  )
}
export default PodcastDetail
