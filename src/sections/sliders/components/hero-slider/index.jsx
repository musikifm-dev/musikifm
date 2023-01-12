import { SwiperSlide } from 'swiper/react'
import { default as RBCard } from 'react-bootstrap/Card'
import 'swiper/scss'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import 'swiper/css/pagination'
import styles from './index.module.scss'
import Icon from 'assets/svg'
import { route } from 'utils/constants'
import { useGetHomeDataQuery } from 'store/api/admin-base'
import { Card } from 'components/ui'
import CardHeader from 'components/ui/card/components/header'
import CardBody from 'components/ui/card/components/body'
import SliderContainer from 'sections/sliders'

const HeroSlider = () => {
  const { data, isSuccess } = useGetHomeDataQuery()

  return (
    <SliderContainer breakpoints="hero">
      {isSuccess &&
        data.map((item) => (
          <SwiperSlide key={item.id}>
            <Card className={styles.card}>
              <CardHeader to={route.podcast} id={item.id} image={item.image} className={styles.card__header} />
              <CardBody className={styles.body}>
                {item.onair === true && <Icon name="onair" className={styles.body__icon}  />}
                <RBCard.Title className={styles.body__title}>{item.slidertitle}</RBCard.Title>
              </CardBody>
            </Card>
          </SwiperSlide>
        ))}
    </SliderContainer>
  )
}
export default HeroSlider
