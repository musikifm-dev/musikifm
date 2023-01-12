import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Button, Form, Image } from 'react-bootstrap'
import clsx from 'clsx'
import { useFormik } from 'formik'
import styles from '../index.module.scss'
import { route } from 'utils/constants'
import Icon from 'assets/svg'
import logoBlack from '../../../assets/img/logo-black.png'
import { setStep } from 'store/slices/auth'

export default function EmailVerification() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: (values) => {
      // dispatch(setStep(1)) // if submitting succesfully get back step state to initial val - 1
      //console.log('form')
      return {
        email: values.email,
      }
    },
  })

  return (
    <div className="container">
      <div className="row mt-5 justify-content-center">
        <div className="col-10">
          <div className={clsx(styles.icon, styles.spaceBetween)}>
            <Link className={styles.icon__link} to={route.login} onClick={() => dispatch(setStep(1))}>
              <Icon name="prev" size={30} className={styles.icon__item} />
              <div className={styles.icon__text}>Geri</div>
            </Link>
            <Link className={styles.icon__link} to={route.home} onClick={() => dispatch(setStep(1))}>
              <Icon name="close" size={30} className={styles.icon__item} />
            </Link>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-4">
          <div className={clsx('d-flex flex-column justify-content-center align-items-center mt-12', styles.x)}>
            <Image src={logoBlack} width={200} height={41} />
            <div className="d-flex flex-column justify-content-center align-items-center mt-4">
              <h3 className="fs-3 fw-bold">Aktivasyon Kodu E-Postama Gelsin</h3>
            </div>
            <Form className={clsx('flex-column mt-4', styles.form)} onSubmit={formik.handleSubmit}>
              <Form.Group>
                <Form.Group className={styles.dropdown}>
                  <Form.Control
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Write your e-mail"
                    size="lg"
                    className={clsx(styles.placeholder)}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                </Form.Group>
                {formik.errors.email && formik.touched.email && (
                  <Form.Text className="fw-light text-danger">{formik.errors.email}</Form.Text>
                )}
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 mt-4" onClick={() => navigate(route.home)}>
                Send my code
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}
