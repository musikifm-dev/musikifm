import { Card } from 'components/ui'
import CardBody from 'components/ui/card/components/card-body'
import CardHeader from 'components/ui/card/components/card-header'
import { route } from 'utils/constants'
import { default as RBCard } from 'react-bootstrap/Card'
import { SwiperSlide } from 'swiper/react'
import { useGetBlogDataQuery } from 'store/api/data'
import SliderContainer from 'sections/sliders'

import { Button } from 'react-bootstrap'
import styles from './index.module.scss'

export default function BlogSlider() {
  const { isSuccess, data } = useGetBlogDataQuery()

  return (
    <SliderContainer header="BLOG" breakpoints="blog" route={route.blog}>
      {isSuccess &&
        data?.map((item) => (
          <SwiperSlide key={item.id}>
            <Card>
              <CardHeader to={route.blog} id={item.id} image={item.image} />
              <CardBody>
                <RBCard.Title className={styles.title}>{item.title}</RBCard.Title>
                <div className={styles.footerSection}>
                  <Button variant="secondary" className={styles.footerSection__genre}>
                    #{item.tag}
                  </Button>
                  <div className={styles.footerSection__more}>more &gt;</div>
                </div>
              </CardBody>
            </Card>
          </SwiperSlide>
        ))}
    </SliderContainer>
  )
}
