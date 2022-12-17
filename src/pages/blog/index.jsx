import { Card, FilterBar, Switch } from 'components/ui'
import CardBody from 'components/ui/card/components/card-body'
import CardHeader from 'components/ui/card/components/card-header'
import { default as RBCard } from 'react-bootstrap/Card'
import clsx from 'clsx'
import { route } from 'utils/constants'

import { useGetBlogDataQuery } from 'store/api/data'
import { deleteBlogFilter, setBlogFilter } from 'store/slices/podcast'
import { Button, Stack } from 'react-bootstrap'
import styles from './index.module.scss'
import { useState } from 'react'
import { useEffect } from 'react'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Blog() {
  const { isSuccess, data } = useGetBlogDataQuery()
  const [switchType, setSwitchType] = useState(false)
  const [renderData, setRenderData] = useState()
  const { selectedBlogFilter } = useSelector((state) => state.podcast)
  const navigate = useNavigate()
  console.log(navigate.state)

  useEffect(() => {
    isSuccess && setRenderData(readableBlog)
  }, [data])

  useEffect(() => {
    if (selectedBlogFilter.length > 0) {
      if (switchType) {
        console.log('true')
        setRenderData(filteredWatchablePodcasts)
      } else {
        console.log('false')
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

  // const isFilteredPodcastReady =
  //   selectedBlogFilter === null || selectedBlogFilter === undefined || selectedBlogFilter.length === 0

  return (
    <>
      <FilterBar
        navigate={route.home}
        setFilter={setBlogFilter}
        deleteFilter={deleteBlogFilter}
        state={selectedBlogFilter}
      />
      <div className={clsx('row', styles.podcast)}>
        <div className="d-flex justify-content-between align-items-center ">
          <h3 className={styles.podcast__header}>BLOG</h3>
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
                    // to={`${route.blog}/${item.id}`}
                    onClick={navigate(`${route.blog}/${item.id}`, { state: item.video })}
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
