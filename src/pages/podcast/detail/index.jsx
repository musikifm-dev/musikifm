import axios from 'axios'
import clsx from 'clsx'
import OtherPost from 'components/Detail/OtherPost'
import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { APP } from 'utils/constants'
import styles from './index.module.scss'

function PodcastDetail() {
  const { id } = useParams()
  const [results, setResult] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

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
                  <h2 className={styles.podcastSection__title}>{results.attributes.songname}</h2>
                </div>
                <div>
                  <h5 className={styles.podcastSection__artist}>{results.attributes.artist}</h5>
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
              <div className={styles.podcastSection__text}>320</div>
              <div className={styles.podcastSection__text}>23</div>
              <div className={styles.podcastSection__text}>share</div>
            </div>
          </section>
          <div className="row mt-5 podcastContent">
            <p>{results.attributes.description}</p>
          </div>
        </div>
        <div className="col-md-3">
          <OtherPost id={id} />
        </div>
      </div>
    </div>
  )
}
export default PodcastDetail
