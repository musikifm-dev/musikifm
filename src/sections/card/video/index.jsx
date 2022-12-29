import { Card } from 'components/ui'
import CardHeader from 'components/ui/card/components/header'
import CardBody from 'components/ui/card/components/body'
import PropTypes from 'prop-types'
import { default as RBCard } from 'react-bootstrap/Card'
import { route } from 'utils/constants'
import styles from './index.module.scss'
import { Button } from 'react-bootstrap'

export default function VideoCard({ data }) {
  const { id, title, image, tag } = data

  return (
    <Card className={styles.card}>
      <CardHeader to={`${route.video}/${id}`} image={image} isPlayIcon={true} className={styles.card__header} />
      <CardBody className={styles.body}>
        <RBCard.Title className={styles.body__title}>{title}</RBCard.Title>
        <section className={styles.footer}>
          <Button variant="secondary" className={styles.footer__genre}>
            #{tag}
          </Button>
          <div className={styles.footer__more}>more &gt;</div>
        </section>
      </CardBody>
    </Card>
  )
}

VideoCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    tag: PropTypes.string,
  }),
}
