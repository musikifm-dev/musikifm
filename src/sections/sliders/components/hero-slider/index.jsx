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
import CardHeader from 'components/ui/card/components/card-header'
import CardBody from 'components/ui/card/components/card-body'
import SliderContainer from 'sections/sliders'

const HeroSlider = () => {
  const { data, isSuccess } = useGetHomeDataQuery()

  return (
    <SliderContainer breakpoints="hero">
      {isSuccess &&
        data.map((item) => (
          <SwiperSlide key={item.id}>
            <Card bsPrefix={styles.card}>
              <div className={styles.herobox}>
                <div className={styles.herobox__image}>
                  <CardHeader to={route.podcast} id={item.id} image={item.image} imageStyle={styles.image} />
                </div>
                <div className={styles.herobox__body}>
                  <CardBody>
                    <div className={styles.herobox__body_onair}>
                      {item.onair === true && <Icon name="onair" height="35" size="79" />}
                    </div>
                    <RBCard.Title className={styles.card__title}>{item.slidertitle}</RBCard.Title>
                    <RBCard.Text className={styles.card__description}>{item.sliderdescription}</RBCard.Text>
                  </CardBody>
                </div>
              </div>
            </Card>
          </SwiperSlide>
        ))}
    </SliderContainer>
  )
}
export default HeroSlider
