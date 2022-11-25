// import Card from 'components/Card'
// import { route } from 'utils/constants'
// import { useGetPodcastDataQuery } from 'store/api/data'
// import styles from './style.module.scss'

export default function Podcast() {
  // const { isSuccess, data } = useGetPodcastDataQuery()
  // console.log(data)
  return (
    <div className="page">
      <div className="row row-cols-5 blog">
      sss  {/* {isSuccess &&
          data.map((item) => (
            <div className="col col-lg-3 col-md-4 col-xs-6" key={item.id}>
              <Card data={item} to={route.podcast} />
            </div>
          ))} */}
      </div>
    </div>
  )
}
