import { Card } from 'components/ui'
import CardBody from 'components/ui/card/components/body'
import CardHeader from 'components/ui/card/components/header'
import { route } from 'utils/constants'
import { default as RBCard } from 'react-bootstrap/Card'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import styles from './index.module.scss'

export default function CardSection(props) {
  const { data, type } = props
  console.log(type);
  const navigate = useNavigate()

  return (
    <Card className={styles.card}>
      <CardHeader
        to={`${route.blog}/${data.id}`}
        image={data.image}
        imageStyle={styles.image}
        className={styles.header}
      />
      <CardBody className={styles.body}>
        <RBCard.Title className={styles.title}>{data.title}</RBCard.Title>
        <div className={styles.footerSection}>
          <Button variant="secondary" className={styles.footerSection__genre}>
            #{data.tag}
          </Button>
          <Button
            variant="link"
            className={styles.footerSection__more}
            onClick={() => navigate(`${route.blog}/${data.id}`)}
          >
            more &gt;
          </Button>
        </div>
      </CardBody>
    </Card>
  )
}

CardSection.propTypes = {
  data: PropTypes.any,
  type: PropTypes.string,
  //   title: PropTypes.string,
}
