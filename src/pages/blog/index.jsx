import { Card, FilterBar, Switch } from 'components/ui'
import CardBody from 'components/ui/card/components/card-body'
import CardHeader from 'components/ui/card/components/card-header'
import { route } from 'utils/constants'
import { default as RBCard } from 'react-bootstrap/Card'

import { useGetBlogDataQuery } from 'store/api/data'
import clsx from 'clsx'
import { Button, Stack } from 'react-bootstrap'
import styles from './index.module.scss'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Blog() {
  const { isSuccess, data } = useGetBlogDataQuery()
  const [switchType, setSwitchType] = useState(false)
  const [renderData, setRenderData] = useState(null)

  useEffect(() => {
    isSuccess && setRenderData(data)
  }, [data])

  const switchHandler = () => {
    setSwitchType((prev) => !prev)
    // if (switchType) {
    //   setSwitchData(data.)
    // } else {
    // }
  }

  return (
    <>
      <FilterBar navigate={route.home} />
      <div className={clsx('row', styles.podcast)}>
        <div className="d-flex justify-content-between align-items-center ">
          <h3 className={styles.podcast__header}>BLOG</h3>
          <Switch
            id="blogSeeAll"
            checked={switchType}
            onChange={switchHandler}
            defaultChecked={false}
            switchTextStyle={styles.switch}
            optionLabels={['Watch', 'Read']}
          />
        </div>
        {isSuccess &&
          renderData?.map((item) => (
            <div className="col-12 col-md-4 col-lg-3 col-xxl-2 my-4" key={item.id}>
              <Stack gap={1} direction="horizontal">
                <Card>
                  <CardHeader to={`${route.blog}/${item.id}`} image={item.image} isPlayIcon={switchType}/>
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
