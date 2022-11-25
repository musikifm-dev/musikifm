import { Card } from 'components'
import { useGetPodcastDataQuery } from 'store/api/data'
import { route } from 'utils/constants'

export default function Podcast() {
  const { isSuccess, data } = useGetPodcastDataQuery()

  return (
    <div className="page">
      <div className="row row-cols-5 blog">
        {isSuccess &&
          data.map((item, i) => (
            <div className="col col-lg-3 col-md-4 col-xs-6" key={i}>
              <Card data={item} to={route.podcast} />
            </div>
          ))}
      </div>
    </div>
  )
}
