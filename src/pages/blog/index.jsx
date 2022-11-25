import { Card } from 'components'
import BlogItem from 'components/Items/BlogItem'
import { useEffect, useState } from 'react'
import { APP, route } from 'utils/constants'

export default function Blog() {
  const [blogData, setBlogData] = useState([])

  useEffect(() => {
    fetch(APP.blog)
      .then((response) => response.json())
      .then((data) => {
        setBlogData(data)
        console.log(data);
      })
  }, [])

  // function allow(clicked_name) {
  //   var blogbox = document.getElementsByClassName('blogBox');
  //   console.log(clicked_name);
  // }

  return (
    <div>
      {/* <div className="tagFilter">
        <div className="backBtn">
          <div className="#">Back</div>
        </div>
        <div className="tag">
          <ul>
            <li>
              <a href="#javascript" className="active">
                Tümü
              </a>
            </li>
            {blogData.map((item, i) => (
              <li key={i}>
                <a href="#javascript">{item.tag}</a>
              </li>
            ))}
          </ul>
        </div>
      </div> */}
      <div className="page">
        <div className="row row-cols-5 blog">
          {blogData.map((item) => (
            <div className="col col-lg-3 col-md-4 col-xs-6" key={item.id}>
              <BlogItem data={item} key={item.id} />
              <Card data={item} to={route.blog} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
