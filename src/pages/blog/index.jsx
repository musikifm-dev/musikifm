import { Card } from 'components/ui'
import { useGetBlogDataQuery } from 'store/api/data'
import { route } from 'utils/constants'

export default function Blog() {
  const { isSuccess, data } = useGetBlogDataQuery()
  
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
          {isSuccess &&
            data.map((item) => (
              <div className="col col-lg-3 col-md-4 col-xs-6" key={item.id}>
                <Card data={item} to={route.blog} />
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
