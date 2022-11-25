import { useEffect, useState } from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import VideoItem from 'components/Items/VideoItem'
import { URL_VIDEOS } from 'utils/URL'
import { route } from 'utils/constants'
import { Link } from 'react-router-dom'

export default function VideoSlider() {
  const [videoData, setvideoData] = useState([{}])

  useEffect(() => {
    fetch(URL_VIDEOS)
      .then((response) => response.json())
      .then((data) => {
        setvideoData(data)
      })
  }, [])

  const options = {
    margin: 30,
    responsiveClass: true,
    nav: false,
    dots: false,
    autoplay: false,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1366: {
        items: 3,
      },
    },
  }

  return (
    <div className="video mt-5">
      <div className="titleDiv">
        <h3>VİDEO</h3>
        <Link to={route.video}>See All</Link>
      </div>

      <OwlCarousel className="owl-theme" {...options}>
        {videoData.map((item, i) => (
          <div className="item" key={i}>
            <VideoItem data={item} />
          </div>
        ))}
      </OwlCarousel>
    </div>
  )
}
