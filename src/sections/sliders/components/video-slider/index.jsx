import { SwiperSlide } from 'swiper/react'
import { default as RBCard } from 'react-bootstrap/Card'
import SliderContainer from 'sections/sliders'
import { Button } from 'react-bootstrap'
import { route } from 'utils/constants'
import styles from './index.module.scss'
import { Card } from 'components/ui'
import CardHeader from 'components/ui/card/components/card-header'
import CardBody from 'components/ui/card/components/card-body'
import PropTypes from 'prop-types'

export default function VideoSlider(props) {
  const { title, data, loader } = props

  return (
    <SliderContainer header={title} breakpoints="video" route={route.video}>
      {loader &&
        data.map((item, i) => (
          <SwiperSlide key={i}>
            <Card className={styles.card}>
              <CardHeader
                to={`${route.video}/${item.id}`}
                image={item.image}
                isPlayIcon={true}
                imageStyle={styles.image}
              />
              <CardBody>
                <RBCard.Title className={styles.title}>{item.title}</RBCard.Title>
                <section className={styles.footerSection}>
                  <Button variant="secondary" className={styles.footerSection__genre}>
                    #{item.tag}
                  </Button>
                  <div className={styles.footerSection__more}>more &gt;</div>
                </section>
              </CardBody>
            </Card>
          </SwiperSlide>
        ))}
    </SliderContainer>
  )
}

VideoSlider.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
  loader: PropTypes.bool,
}
