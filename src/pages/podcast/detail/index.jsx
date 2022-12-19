import Icon from 'assets/svg'
import axios from 'axios'
import clsx from 'clsx'
import OtherPost from 'components/Detail/OtherPost'
import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useGetPodcastDetailQuery } from 'store/api/data'
import { APP } from 'utils/constants'
import styles from './index.module.scss'
import Comment from 'components/Comments/Comments'

function PodcastDetail() {
  const { id } = useParams()
  const [results, setResult] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  
  const { data, isSuccess } = useGetPodcastDetailQuery(id)
  console.log(isSuccess && data.data)

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      try {
        const res = await axios.get(`${APP.podcasts}/${id}?populate=*`)
        setResult(res.data.data)
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }
    fetchData()
  }, [id])



  if (loading) return <p>Loading</p>
  if (error) return <p>Error...</p>

  var imgPodcast = APP.base + results.attributes.image.data.attributes.url

  return (
    <div className={styles.wrapper}>
      <div className="row">
        <div className="col-md-9">
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

          {/* <section>
            <div className="row bg-white mt-5 p-3">
              <div className="col-1" />
              <div className="col-4 fs-5 fw-semibold">Song</div>
              <div className="col-2 fs-5 fw-semibold">Genre</div>
              <div className="col-2 fs-5 fw-semibold">Addition Date</div>
              <div className="col-1 fs-5 fw-semibold">Time</div>
              <div className="col-2"></div>
            </div>

            <div className="row bg-white mt-1 d-flex align-items-center">
              <div className="col-1">1</div>
              <div className="col-4 d-flex">
                <div className="col-md-3 pt-2 pl-2 pb-2">
                  <img src={imgPodcast} alt="podcastIMG" className="w-100" />
                </div>
                <div className="col-md-10 d-flex flex-column m-3">
                  <div className="fs-5 fw-semibold">My Baby</div>
                  <div className=" fs-5 fw-light">Kevin Minnick</div>
                </div>
              </div>
              <div className="col-2 fs-5 fw-light">Psyc.Rock</div>
              <div className="col-2 fs-5 fw-light">30 Kasim 2021</div>
              <div className="col-1 fs-5 fw-light">4:21</div>
              <div className="col-2 d-flex justify-content-evenly ml-2">
                <button onClick={clickHandler} className="border-0 bg-transparent">
                  <Icon name={clicked ? 'heartSolid' : 'heartEmpty'} size={15} />
                </button>
                <Icon name="plus" size={15} />
                <Icon name="dots" size={15} />
              </div>
            </div>
          </section> */}

          <section>
            <div className="row bg-white mt-5 p-3">
              <div className="p-5">
                <p className={styles.podcastSection__paragraph}>
                {data?.data?.attributes.description}
                </p>
              
              </div>
                  
            </div>
          </section>
          <div className={styles.podcastSection__comments}>
     
          <h4>{data?.data?.attributes.reviews.data[0].attributes.userDisplayName}</h4>
         <p>{data?.data?.attributes.reviews.data[0].attributes.body}</p>
          </div>
          <Comment podcastid={id} />
        </div>
        <div className="col-md-3">
          <OtherPost id={id} />
        </div>
      </div>

     
    </div>
  )
}
export default PodcastDetail
