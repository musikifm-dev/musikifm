import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper'
import { Button, Image, Stack } from 'react-bootstrap'
import clsx from 'clsx'
import { useGetVideoDataQuery, useGetVideoHomeSliderQuery } from 'store/api/admin-base'
import { setState } from 'store/slices/player'
import { useWindowSize } from 'utils/hooks/useWindowSize'
import EmbedVideo from 'components/ui/embed-video'
import { VideoSlider } from 'sections'
import { APP } from 'utils/constants'
import styles from './index.module.scss'
import { useRef } from 'react'
import { changeVideoState, setVideoUrl } from 'store/slices/video'
import { useEffect } from 'react'
import ReactPlayer from 'react-player'

export default function Video() {
  // eslint-disable-next-line
  const { playing } = useSelector((state) => state.player)
  const { videoUrl } = useSelector((state) => state.video)
  const { data, isSuccess } = useGetVideoHomeSliderQuery()
  const { data: videoData, isSuccess: videoLoader } = useGetVideoDataQuery()
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const { isMobile } = useWindowSize()
  const embedRef = useRef(null)

  useEffect(() => {
    if (isSuccess) {
      dispatch(setVideoUrl(data?.[0].videourl))
    }
  }, [isSuccess])

  const clickHandler = () => {
    setOpen(true)
    dispatch(setState({ playing: false }))
  }

  const filteredKonser = useMemo(() => videoData?.filter((f) => f.kategori === 'konser'), [videoData])
  const filteredEditoryal = useMemo(() => videoData?.filter((f) => f.kategori === 'editoryal'), [videoData])
  const filteredMüzikTarihi = useMemo(() => videoData?.filter((f) => f.kategori === 'Müzik Tarihi'), [videoData])

  const videoClickHandler = (item) => {
    if (!open) return
    dispatch(setVideoUrl(item.videourl))
    dispatch(changeVideoState(true))
  }

  return (
    <div className={styles.video}>
      <div className="row">
        <div className="col-12">
          <section>
            {open && isSuccess && videoUrl ? (
              <EmbedVideo className={styles.embedVideo} ref={embedRef} />
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
                slidesPerView: 2.3,
              },
              1366: {
                slidesPerView: 3.3,
                spaceBetween: 0,
              },
              1600: {
                slidesPerView: 4.442,
                spaceBetween: 0,
              },
              1789: {
                slidesPerView: 4.442,
                spaceBetween: 0,
              },
            }}
            className={styles.slider}
          >
            {isSuccess &&
              data.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className={clsx(styles.card, styles.active)} onClick={() => videoClickHandler(item)}>
                    <Image src={APP.adminBase + item.image} className={styles.card__img} />
                    {open && videoUrl === item.videourl && (
                      <div className={styles.card__item}>CURRENTLY PLAYING...</div>
                    )}
                    {videoUrl !== item.videourl && (
                      <div>
                        <div className={styles.card__duration}>01:25</div>
                        <div className={styles.card__title}>{item.title}</div>
                      </div>
                    )}
                    <ReactPlayer
                      url={`https://www.youtube.com/embed/${item.videourl}`}
                      onDuration={(d) => console.log(d)}
                      className={styles.card__video}
                      style={{ display: 'none' }}
                    />
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>

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
