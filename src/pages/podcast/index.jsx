import { useDispatch, useSelector } from 'react-redux'
import { setCurrent, setPlayerType } from 'store/slices/player'
import { useGetPodcastDataQuery } from 'store/api/data'
import Icon from 'assets/svg'
import { Card, FilterBar } from 'components/ui'
import CardHeader from 'components/ui/card/components/card-header'
import CardBody from 'components/ui/card/components/card-body'
import { default as RBCard } from 'react-bootstrap/Card'
import { route } from 'utils/constants'
import styles from './index.module.scss'
import clsx from 'clsx'
import { useMemo } from 'react'
// import { useMemo } from 'react'

// import { useMemo } from 'react'

// const mock = [
//   'ipsum',
//   'sitamet',
//   'lorem',
//   'dolar',
//   'Çizgi Filmler',
//   'Güzellik ilgili ipuçları',
//   'Güzellik ilgili ipuçları',
//   'Güzellik ilgili ipuçları',
//   'Güzellik ilgili ipuçları',
//   'Mixler',
//   'Mixler',
//   'Güzellik ilgili ipuçları',
//   'Mixler',
//   'Güzellik ilgili ipuçları',
//   'Yemek Pisirme',
// ]

export default function Podcast() {
  const { isSuccess, data } = useGetPodcastDataQuery()
  const { current } = useSelector((state) => state.player)
  const { selectedFilter } = useSelector((state) => state.podcast)
  const dispatch = useDispatch()

  const clickHandler = (val) => {
    dispatch(setPlayerType(true)) // setPodcast --> true
    dispatch(setCurrent(val))
  }
  const filteredPodcasts = useMemo(() => isSuccess && data.filter((f) => f.tag[0] === selectedFilter), [selectedFilter])
  console.log(filteredPodcasts.length)
  return (
    <>
      <FilterBar navigate={route.home} />
      <div className={clsx('row', styles.podcast)}>
        <h3 className={styles.podcast__header}>PODCAST</h3>

        <div>{selectedFilter}</div>
        {isSuccess &&
          data?.map((item) => (
            <div className="col-12 col-md-4 col-lg-3 col-xxl-2 my-4" key={item.id}>
              <Card>
                <CardHeader to={`${route.podcast}/${item.id}`} image={item.image} />
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
    </>
  )
}
