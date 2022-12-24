import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react'
import { default as RBCard } from 'react-bootstrap/Card'
import CardBody from 'components/ui/card/components/card-body'
import CardHeader from 'components/ui/card/components/card-header'
import { Navigation, Pagination, Autoplay } from 'swiper'
import { Button, Stack } from 'react-bootstrap'
import clsx from 'clsx'
import { useGetVideoDataQuery, useGetVideoHomeSliderQuery } from 'store/api/admin-base'
import { setState } from 'store/slices/player'
import { useWindowSize } from 'utils/hooks/useWindowSize'
import EmbedVideo from 'components/ui/embed-video'
import { VideoSlider } from 'sections'
import { APP } from 'utils/constants'
import styles from './index.module.scss'
import { Card } from 'components/ui'
import { route } from 'utils/constants'

export default function Video() {
  // eslint-disable-next-line
  const { playing } = useSelector((state) => state.player)
  const { data, isSuccess } = useGetVideoHomeSliderQuery()
  const { data: videoData, isSuccess: videoLoader } = useGetVideoDataQuery()
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const { isMobile } = useWindowSize()

  const clickHandler = () => {
    setOpen(true)
    dispatch(setState({ playing: !playing }))
  }

  const filteredKonser = useMemo(() => videoData?.filter((f) => f.kategori === 'konser'), [videoData])
  const filteredEditoryal = useMemo(() => videoData?.filter((f) => f.kategori === 'editoryal'), [videoData])
  const filteredMüzikTarihi = useMemo(() => videoData?.filter((f) => f.kategori === 'Müzik Tarihi'), [videoData])

  return (
    <div className={styles.video}>
      <div className="row">
        <div className="col-12">
          <section>
            {open ? (
              <EmbedVideo embedId={data?.[0].videourl} className={styles.embedVideo} />
            ) : (
              <div className={styles.image}>
                <img src={APP.adminBase + data?.[0].image} alt="homeSliderImage" className={styles.image__item} />
                <Stack gap={5} className={clsx(styles.absolute, styles.content)}>
                  <Stack gap={3}>
                    <div className={clsx(styles.image__title)}>{data?.[0].title}</div>
                    <div className={clsx(styles.image__description)}>{data?.[0].description}</div>
                  </Stack>
                  <Stack direction="horizontal" gap={isMobile ? 3 : 4} className={styles.btn}>
                    <Button variant="warning" className={clsx(styles.btn__item, styles.orange)} onClick={clickHandler}>
                      WATCH VIDEO
                    </Button>
                    <Button variant="secondary" className={styles.btn__item}>
                      READ MORE
                    </Button>
                  </Stack>
                </Stack>
              </div>
            )}
          </section>
          <section>
            <div className={styles.slider}>
              {/* <div className="d-flex justify-content-between align-items-center my-5">
                <h3 className={styles.slider__header}>ssss</h3>
                <Link to={route} className={styles.slider__seeAll}>
                  See All
                </Link>
              </div> */}

              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 1.2,
                  },
                  576: {
                    slidesPerView: 1.4,
                  },
                  768: {
                    slidesPerView: 2.3,
                  },
                  992: {
                    slidesPerView: 0,
                  },
                  1280: {
                    slidesPerView: 2.3,
                    spaceBetween: 0,
                  },
                  1400: {
                    slidesPerView: 2.442,
                    spaceBetween: 0,
                  },
                  1700: {
                    slidesPerView: 3.442,
                    spaceBetween: 0,
                  },
                }}
              >
                {isSuccess &&
                  data.slice(1).map((item) => (
                    <SwiperSlide key={item.id}>
                      <Card className={styles.card}>
                        <CardHeader
                          to={`${route.video}/${item.id}`}
                          image={item.image}
                          className={styles.header}
                          imageStyle={styles.xx}
                        />
                        <CardBody className={styles.card__body}>
                          <RBCard.Title className={styles.title}>{item.title}</RBCard.Title>
                        </CardBody>
                      </Card>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </section>
          <section className={styles.categorySection}>
            <VideoSlider data={filteredKonser} loader={videoLoader} title="Konser" />
            <VideoSlider data={filteredEditoryal} loader={videoLoader} title="Editoryal" />
            <VideoSlider data={filteredMüzikTarihi} loader={videoLoader} title="Müzik Tarihi" />
          </section>
        </div>
      </div>
    </div>
  )
}
