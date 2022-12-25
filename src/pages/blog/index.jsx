import { useState, useEffect, useMemo } from 'react'
import clsx from 'clsx'
import { Stack } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { FilterBar, Switch } from 'components/ui'
import { deleteBlogFilter, resetBlogFilter, setBlogFilter } from 'store/slices/blog'

import { route } from 'utils/constants'
import styles from './index.module.scss'
import { useGetBlogTagsQuery } from 'store/api/comment'
import { useGetBlogDataQuery } from 'store/api/admin-base'
import CardSection from 'sections/card'

export default function Blog() {
  const { isSuccess, data } = useGetBlogDataQuery()
  const { data: blogTags, isSuccess: blogTagsSuccess } = useGetBlogTagsQuery()
  const [switchType, setSwitchType] = useState(false)
  const [renderData, setRenderData] = useState()
  const { selectedBlogFilter } = useSelector((state) => state.blog)

  useEffect(() => {
    isSuccess && setRenderData(readableBlog)
  }, [data])

  // useEffect(() => {
  //   if (selectedBlogFilter.lengt === 1 && selectedBlogFilter.includes('All')) setRenderData(readableBlog)
  //   console.log(true)
  // }, [selectedBlogFilter])

  useEffect(() => {
    if (selectedBlogFilter.length > 0) {
      if (switchType) {
        setRenderData(filteredWatchablePodcasts)
      } else {
        if (selectedBlogFilter.includes('tümü')) {
          setRenderData(readableBlog)
        } else {
          setRenderData(filteredReadeblePodcasts)
        }
      }
    } else {
      if (switchType) {
        setRenderData(watchableBlog)
      } else {
        setRenderData(filteredReadeblePodcasts)
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

  return (
    <>
      <FilterBar
        navigate={route.home}
        state={selectedBlogFilter}
        setState={setBlogFilter}
        deleteState={deleteBlogFilter}
        resetState={resetBlogFilter}
        tags={blogTagsSuccess && blogTags}
      />
      <div className={clsx('row', styles.blog)}>
        <div className="d-flex justify-content-between align-items-center ">
          <h3 className={styles.blog__header}>{switchType ? 'VIDEOS' : 'ARTICLES'}</h3>
          <Switch
            id="blogSeeAll"
            name="blogSeeAll"
            checked={switchType}
            onChange={switchHandler}
            switchTextStyle={styles.switch}
            optionLabels={['Watch', 'Read']}
          />
        </div>
        <div className="row">
          {isSuccess &&
            renderData?.map((item) => (
              <div className="col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3 my-4" key={item.id}>
                <Stack gap={3} direction="horizontal">
                  <CardSection data={item} type="blog" />
                </Stack>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}
