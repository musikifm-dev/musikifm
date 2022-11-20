import Icon from 'assets/svg'
import { Button, Dropdown, DropdownButton, Form, Image } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { route } from 'utils/constants'
import styles from '../index.module.scss'
import logoBlack from '../../../assets/img/logo-black.png'
import clsx from 'clsx'
import { useFormik } from 'formik'

export default function ActivationCode() {
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      phoneNumber: '',
      fullName: '',
      password: '',
      email: '',
      termsAndConditions: '',
    },
    onSubmit: (values) => {
      //   register(values)
      console.log(values)
    },
  })
  return (
    <div className="d-flex flex-column justify-content-center mt-10 px-5">
      <div className={styles.icon}>
        <Link className={styles.icon__link} onClick={() => navigate(-1)}>
          <Icon name="prev" size={30} className={styles.icon__item} />
        </Link>
        <Link className={styles.icon__link} to={route.home}>
          <Icon name="close" size={30} className={styles.icon__item} />
        </Link>
      </div>
      <div className="row">
        <div className={clsx('d-flex flex-column justify-content-center align-items-center mt-12', styles.x)}>
          <Link to={route.home}>
            <Image src={logoBlack} width={200} height={41} />
          </Link>
          <div className="d-flex flex-column justify-content-center align-items-center mt-4">
            <h3 className="fs-3 fw-bold">Tek Kullanımlık Şifre</h3>
            <div>Devam edebilmek için +905324553432 numaralı telefona gönderilen tek kullanımlık şifreyi gir.</div>
          </div>
          <Form className="flex-column mt-4" onSubmit={formik.handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="phoneNumber" className={clsx('mb-3', styles.label, styles.timer)}>
                <div className="timer"> 00:00 </div>
              </Form.Label>
              <Form.Group className={styles.dropdown}>
                <DropdownButton
                  variant="outline-secondary"
                  id="input-group-dropdown-1"
                  defaultValue="+90"
                  title="+90"
                  size="lg"
                  className={styles.dropdown__btn}
                >
                  <Dropdown.Item href="#">+90</Dropdown.Item>
                  <Dropdown.Item href="#">+375</Dropdown.Item>
                </DropdownButton>
                <Form.Control
                  id="phoneNumber"
                  name="phoneNumber"
                  type="text"
                  placeholder="Write your mobile number"
                  size="lg"
                  className={clsx(styles.dropdown__input, styles.placeholder)}
                  onChange={formik.handleChange}
                  value={formik.values.phoneNumber}
                />
              </Form.Group>
              {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                <Form.Text className="fw-light text-danger">{formik.errors.phoneNumber}</Form.Text>
              )}
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="w-100 mt-4"
              onClick={() => navigate('/login/sms-verification')}
            >
              Continue with number
            </Button>
          </Form>
          <div className="mt-3">
            Are you new here?{' '}
            <Link to={route.register} className="fw-bold text-black">
              Sign Up
            </Link>
            <div>
              <div className={styles.divider}>or</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
