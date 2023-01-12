import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import clsx from 'clsx'
// import { setCurrent, setPlayerType } from 'store/slices/player'
import { useGetPodcastDataQuery } from 'store/api/admin-base'
import { useGetPodcastTagsQuery } from 'store/api/comment'
import { FilterBar } from 'components/ui'

import { route } from 'utils/constants'
import styles from './index.module.scss'
import { deletePodcastFilter, resetPodcastFilter, setPodcastFilter } from 'store/slices/podcast'
import { PodcastCard } from 'sections'

export default function Podcast() {
  const { isSuccess, data } = useGetPodcastDataQuery()
  // const { current } = useSelector((state) => state.player)
  const { selectedPodcastFilter } = useSelector((state) => state.podcast)
  const { data: podcastTags, isSuccess: podcastTagsSuccess } = useGetPodcastTagsQuery()
  // const dispatch = useDispatch()

  // const clickHandler = (val) => {
  //   dispatch(setPlayerType(true)) // setPodcast --> true
  //   dispatch(setCurrent(val))
  // }

  let filter = new Set(selectedPodcastFilter)
  const filteredPodcasts = useMemo(() => data?.filter((f) => f.tag.some((s) => filter.has(s))), [selectedPodcastFilter])

  return (
    <>
      <FilterBar
        navigate={route.home}
        state={selectedPodcastFilter}
        setState={setPodcastFilter}
        deleteState={deletePodcastFilter}
        resetState={resetPodcastFilter}
        tags={podcastTagsSuccess && podcastTags}
      />
      <div className={clsx('row', styles.podcast)}>
        <h3 className={styles.podcast__header}>PODCAST</h3>
        {isSuccess && selectedPodcastFilter.includes('tümü')
          ? data.map((item) => (
              <div className={clsx('col-6 col-sm-6 col-md-2', styles.box)} key={item.id}>
                <PodcastCard data={item} />
              </div>
            ))
          : filteredPodcasts?.map((item) => (
              <div className={clsx('col-6 col-sm-6 col-md-2', styles.box)} key={item.id}>
                <PodcastCard data={item} />
              </div>
            ))}
      </div>
    </>
  )
}
