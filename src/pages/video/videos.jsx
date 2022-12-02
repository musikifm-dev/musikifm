import { Card } from 'components/ui'
import { useGetVideoDataQuery } from 'store/api/data'
import { route } from 'utils/constants'

export default function Video() {
  const { isSuccess, data } = useGetVideoDataQuery()

 

  return (
    <div>
      <div className="page">
        <div className="row row-cols-5 blog">
          {isSuccess &&
            data.map((item) => (
              <div className="col col-lg-3 col-md-4 col-xs-6" key={item.id}>
                <Card data={item} to={route.video} />
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
