import { useDispatch, useSelector } from 'react-redux'
import { setCurrent, setPlayerType } from 'store/slices/player'
import { useGetPodcastDataQuery } from 'store/api/data'
import Icon from 'assets/svg'
import { Card } from 'components/ui'
import CardHeader from 'components/ui/card/components/card-header'
import CardBody from 'components/ui/card/components/card-body'
import { default as RBCard } from 'react-bootstrap/Card'
import { route } from 'utils/constants'
import styles from './index.module.scss'

export default function Podcast() {
  const { isSuccess, data } = useGetPodcastDataQuery()
  const dispatch = useDispatch()
  const { current } = useSelector((state) => state.player)

  const clickHandler = (val) => {
    dispatch(setPlayerType(true)) // setPodcast --> true
    dispatch(setCurrent(val))
  }
  return (
    <div className="row">
      {isSuccess &&
        data.map((item) => (
          <div className="col-12 col-md-4 col-lg-3 col-xxl-2 mb-4" key={item.id}>
            <Card>
              <CardHeader to={route.podcast} id={item.id} image={item.image} />
              <CardBody>
                <div>
                  <RBCard.Title className={styles.title}>{item.title}</RBCard.Title>
                  <RBCard.Text className={styles.description}>{item.description}</RBCard.Text>
                </div>
                <section className={styles.btnSection}>
                  <div className={styles.btnSection__time}>00:25PM</div>
                  <button className={styles.btnSection__podcastBtn} onClick={() => clickHandler(item)}>
                    <Icon name={current?.id === item.id ? 'pause' : 'play'} size="18" />
                  </button>
                </section>
              </CardBody>
            </Card>
          </div>
        ))}
    </div>
  )
}
