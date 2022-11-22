import { Button, Dropdown, DropdownButton, Form, Image, Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import { useCookies } from 'react-cookie'
import { useFormik } from 'formik'
// import { useRegisterMutation } from 'store/api/auth'
import { registerValidationSchema } from 'utils/validationSchema'
import logoBlack from '../../../assets/img/logo-black.png'
import { route } from 'utils/constants'
import clsx from 'clsx'
import styles from '../index.module.scss'
import Icon from 'assets/svg'
import { useDispatch, useSelector } from 'react-redux'
import { setStep } from 'store/slices/auth'

export default function Login() {
  // const [register] = useRegisterMutation()
  // const navigate = useNavigate()
  const step = useSelector((state) => state.auth.step)
  const dispatch = useDispatch()
  console.log(step, 'STEP')

  const formik = useFormik({
    initialValues: {
      phoneNumber: '',
      fullName: '',
      password: '',
      email: '',
      termsAndConditions: '',
    },
    validationSchema: registerValidationSchema,
    onSubmit: (values) => {
      // register(values)
      console.log(values)
    },
  })

  return (
    <div className="container">
      <div className="row mt-5 justify-content-center">
        <div className="col-10">
          <div className={styles.icon}>
            <Link className={styles.icon__link} to={route.home}>
              <Icon name="close" size={30} />
            </Link>
          </div>
        </div>
      </div>
      <div className="row mt-4"></div>
      <div className="row justify-content-center mt-5">
        <div className="col-4">
          <div className={clsx('d-flex flex-column justify-content-center align-items-center mt-12', styles.x)}>
            <Link to={route.home}>
              <Image src={logoBlack} width={200} height={41} />
            </Link>
            <div className="d-flex flex-column justify-content-center align-items-center mt-4">
              <h3 className="fs-3 fw-bold">Login</h3>
              <div>Go inside the best music experience!</div>
            </div>
            <Form className={clsx('flex-column mt-4', styles.form)} onSubmit={formik.handleSubmit}>
              <Form.Group>
                <Form.Label htmlFor="phoneNumber" className={clsx('mb-3', styles.label)}>
                  Your Phone Number
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
              <Button variant="primary" type="submit" className="w-100 mt-4" onClick={() => dispatch(setStep(2))}>
                Continue with number
              </Button>

              <div className="mt-3 text-center">
                Are you new here?{' '}
                <Link to={route.register} className="fw-bold text-black">
                  Sign Up
                </Link>
                <div>
                  <div className={clsx('mt-3', styles.divider)}>or</div>
                </div>
                <Button variant="light" className="w-100 mt-3">
                  <Stack gap={4} direction="horizontal">
                    <Icon name="google" size={24} />
                    <div className="fs-6 fw-medium">Continue with Google</div>
                  </Stack>
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}
