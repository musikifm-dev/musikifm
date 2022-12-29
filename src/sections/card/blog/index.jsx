import { Button } from 'react-bootstrap'
import { Card } from 'components/ui'
import CardHeader from 'components/ui/card/components/header'
import CardBody from 'components/ui/card/components/body'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { route } from 'utils/constants'
import styles from './index.module.scss'

export default function BlogCard({ data }) {
  const { id, image, title, tag } = data
  const navigate = useNavigate()

  return (
    <Card className={styles.card}>
      <CardHeader to={`${route.blog}/${id}`} image={image} className={styles.card__header}/>
      <CardBody className={styles.body}>
        <div className={styles.body__title}>{title}</div>
        <div className={styles.footer}>
          <Button variant="secondary" className={styles.footer__genre}>
            #{tag}
          </Button>
          <Button variant="link" className={styles.footer__more} onClick={() => navigate(`${route.blog}/${id}`)}>
            more &gt;
          </Button>
        </div>
      </CardBody>
    </Card>
  )
}

BlogCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    tag: PropTypes.string,
  }),
}
