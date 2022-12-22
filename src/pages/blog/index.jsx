import { useState, useEffect, useMemo } from 'react'
import clsx from 'clsx'
import { Button, Stack } from 'react-bootstrap'
import { useGetBlogDataQuery } from 'store/api/data'
import { Card, FilterBar, Switch } from 'components/ui'
import { deleteBlogFilter, resetBlogFilter, setBlogFilter } from 'store/slices/blog'
import CardBody from 'components/ui/card/components/card-body'
import CardHeader from 'components/ui/card/components/card-header'
import { default as RBCard } from 'react-bootstrap/Card'
import { route } from 'utils/constants'
import styles from './index.module.scss'
import { useSelector } from 'react-redux'

export default function Blog() {
  const { isSuccess, data } = useGetBlogDataQuery()
  const [switchType, setSwitchType] = useState(false)
  const [renderData, setRenderData] = useState()
  const { selectedBlogFilter } = useSelector((state) => state.blog)

  useEffect(() => {
    isSuccess && setRenderData(readableBlog)
  }, [data])

  useEffect(() => {
    if (selectedBlogFilter.length > 0) {
      if (switchType) {
        setRenderData(filteredWatchablePodcasts)
      } else {
        setRenderData(filteredReadeblePodcasts)
      }
    } else {
      if (switchType) {
        setRenderData(watchableBlog)
      } else {
        setRenderData(readableBlog)
      }
    }
  }, [selectedBlogFilter])

  const watchableBlog = useMemo(() => data?.filter((f) => f.video !== null), [data])
  const readableBlog = useMemo(() => data?.filter((f) => f.video === null), [data])

  let filterWatchable = new Set(selectedBlogFilter)
  const filteredWatchablePodcasts = useMemo(
    () => watchableBlog?.filter((f) => f.tag.some((s) => filterWatchable.has(s))),
    [selectedBlogFilter],
  )

  let filterReadable = new Set(selectedBlogFilter)
  const filteredReadeblePodcasts = useMemo(
    () => readableBlog?.filter((f) => f.tag.some((s) => filterReadable.has(s))),
    [selectedBlogFilter],
  )

  const switchHandler = () => {
    setSwitchType((prev) => !prev)
    if (!switchType) {
      setRenderData(watchableBlog)
    } else {
      setRenderData(readableBlog)
    }
  }
  console.log(selectedBlogFilter)
  // const isFilteredPodcastReady =
  //   selectedBlogFilter === null || selectedBlogFilter === undefined || selectedBlogFilter.length === 0

  return (
    <>
      <FilterBar
        navigate={route.home}
        state={selectedBlogFilter}
        setState={setBlogFilter}
        deleteState={deleteBlogFilter}
        resetState={resetBlogFilter}
      />
      <div className={clsx('row', styles.podcast)}>
        <div className="d-flex justify-content-between align-items-center ">
          <h3 className={styles.podcast__header}>{switchType ? 'VIDEOS' : 'ARTICLES'}</h3>
          <Switch
            id="blogSeeAll"
            name="blogSeeAll"
            checked={switchType}
            onChange={switchHandler}
            switchTextStyle={styles.switch}
            optionLabels={['Watch', 'Read']}
          />
        </div>
        {isSuccess &&
          renderData?.map((item) => (
            <div className="col-12 col-md-4 col-lg-3 col-xxl-2 my-4" key={item.id}>
              <Stack gap={1} direction="horizontal">
                <Card>
                  <CardHeader
                    to={`${route.blog}/${item.id}`}
                    // onClick={navigate(`${route.blog}/${item.id}`, { state: item.video })}
                    image={item.image}
                    isPlayIcon={switchType}
                  />
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
              </Stack>
            </div>
          ))}
      </div>
    </>
  )
}
