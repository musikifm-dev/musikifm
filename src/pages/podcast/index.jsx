import { useEffect, useState } from 'react'
import Card from 'components/Card'
import { URL_PODCAST } from '../../utils/URL'
// import styles from './style.module.scss'

export default function Podcast() {
  const [podcastData, setPodcastData] = useState([])

  useEffect(() => {
    fetch(URL_PODCAST)
      .then((response) => response.json())
      .then((data) => {
        setPodcastData(data)
        console.log(data)
      })
  }, [])

  return (
    <div className="page">
      <div className="row row-cols-5 blog">
        {podcastData.map((item, i) => (
          <div className="col col-lg-3 col-md-4 col-xs-6" key={i}>
            <Card key={item.id} data={item} />
          </div>
        ))}
      </div>
    </div>
  )
}
