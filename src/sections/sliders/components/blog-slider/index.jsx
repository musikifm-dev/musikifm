import { Card } from 'components/ui'
import CardBody from 'components/ui/card/components/card-body'
import CardHeader from 'components/ui/card/components/card-header'
import { route } from 'utils/constants'
import { default as RBCard } from 'react-bootstrap/Card'
import { SwiperSlide } from 'swiper/react'
import { useGetBlogDataQuery } from 'store/api/data'
import SliderContainer from 'sections/sliders'
import PropTypes from 'prop-types'

import { Button } from 'react-bootstrap'
import styles from './index.module.scss'
import { useNavigate } from 'react-router-dom'

export default function BlogSlider({ title }) {
  const { isSuccess, data } = useGetBlogDataQuery()
  const navigate = useNavigate()

  return (
    <SliderContainer header={title} breakpoints="blog" route={route.blog}>
      {isSuccess &&
        data?.map((item) => (
          <SwiperSlide key={item.id}>
            <Card>
              <CardHeader to={`${route.blog}/${item.id}`} image={item.image} imageStyle={styles.image} className={styles.header} />
              <CardBody>
                <RBCard.Title className={styles.title}>{item.title}</RBCard.Title>
                <div className={styles.footerSection}>
                  <Button variant="secondary" className={styles.footerSection__genre}>
                    #{item.tag}
                  </Button>
                  <Button
                    variant="link"
                    className={styles.footerSection__more}
                    onClick={() => navigate(`${route.blog}/${item.id}`)}
                  >
                    more &gt;
                  </Button>
                </div>
              </CardBody>
            </Card>
          </SwiperSlide>
        ))}
    </SliderContainer>
  )
}

BlogSlider.propTypes = {
  title: PropTypes.string,
}
