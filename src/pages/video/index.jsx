import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Stack } from 'react-bootstrap'
import clsx from 'clsx'
import { useGetVideoDataQuery, useGetVideoHomeSliderQuery } from 'store/api/data'
import { setState } from 'store/slices/player'
import { useWindowSize } from 'utils/hooks/useWindowSize'
import EmbedVideo from 'components/ui/embed-video'
import { VideoSlider } from 'sections'
import { APP } from 'utils/constants'
import styles from './index.module.scss'

export default function Video() {
  // eslint-disable-next-line
  const { playing } = useSelector((state) => state.player)
  const { data } = useGetVideoHomeSliderQuery()
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
          {open ? (
            <div className={styles.embedVideo}>
              <EmbedVideo embedId={data?.[0].videourl} />
            </div>
          ) : (
            <div className={styles.image}>
              <img src={APP.base + data?.[0].image} alt="homeSliderImage" className={styles.image__item} />
              <Stack gap={4} className={clsx(styles.absolute, styles.content)}>
                <Stack gap={3}>
                  <div className={clsx(styles.image__title)}>{data?.[0].title}</div>
                  <div className={clsx(styles.image__description)}>{data?.[0].description}</div>
                </Stack>
                <Stack direction="horizontal" gap={isMobile ? 3 : 5} className={styles.btn}>
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
