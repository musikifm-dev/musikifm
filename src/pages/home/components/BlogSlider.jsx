import { useEffect, useState } from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import { API_URL } from 'utils/URL'
import { Link } from 'react-router-dom'
import { route } from 'utils/constants'
import { Card } from 'components'

const BlogSlider = () => {
  const [blogData, setblogData] = useState([])

  useEffect(() => {
    fetch(`${API_URL}/api/blog-report`)
      .then((response) => response.json())
      .then((data) => {
        setblogData(data)
      })
  }, [])
  console.log(blogData)

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
        items: 4,
      },
    },
  }

  return (
    <div className="blog mt-5">
      <div className="titleDiv">
        <h3>BLOG</h3>
        <Link to={route.blog}>See All</Link>
      </div>

      <OwlCarousel className="owl-theme" {...options}>
        {blogData?.map((blogData) => (
          <div className="item" key={blogData.id}>
            <Card data={blogData} to={route.blog} />
          </div>
        ))}
      </OwlCarousel>
    </div>
  )
}

export default BlogSlider
