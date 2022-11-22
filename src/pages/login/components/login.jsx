import { Button, Form, Image, Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { loginValidationSchema } from 'utils/validationSchema'
import logoBlack from '../../../assets/img/logo-black.png'
import { route } from 'utils/constants'
import clsx from 'clsx'
import styles from '../index.module.scss'
import Icon from 'assets/svg'
// import { useDispatch } from 'react-redux'
// import { setStep } from 'store/slices/auth'
// import { useLoginMutation } from 'store/api/auth'

export default function Login() {
  // const [login] = useLoginMutation()
  // const navigate = useNavigate()
  // const step = useSelector((state) => state.auth.step)
  // const dispatch = useDispatch()
  // console.log(step, 'STEP')

  const formik = useFormik({
    validateOnMount: true,
    initialValues: {
      userNameOrEmail: '',
      password: '',
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      console.log(values)
      // login(values)
      // if (isValidEmail(values.input)) {
      //   values.username = ''
      //   values.email = values.input
      // } else {
      //   values.username = values.input
      //   values.email = ''
      // }
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
                <Form.Label htmlFor="username" className={styles.label}>
                  Username / Email
                </Form.Label>
                <Form.Control
                  id="userNameOrEmail"
                  name="userNameOrEmail"
                  type="text"
                  placeholder="Write your username or email"
                  size="lg"
                  onChange={formik.handleChange}
                  value={formik.values.userNameOrEmail}
                  className={styles.placeholder}
                />
                {formik.errors.userNameOrEmail && formik.touched.userNameOrEmail && (
                  <Form.Text className="fw-light text-danger">{formik.errors.userNameOrEmail}</Form.Text>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="password" className={styles.label}>
                  Password
                </Form.Label>
                <Form.Control
                  id="password"
                  name="password"
                  type="text"
                  placeholder="Write your password"
                  size="lg"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  className={styles.placeholder}
                />
                {formik.errors.password && formik.touched.password && (
                  <Form.Text className="fw-light text-danger">{formik.errors.password}</Form.Text>
                )}
              </Form.Group>
              {/* <Form.Group>
                <Form.Label htmlFor="email" className={styles.label}>
                  Email
                </Form.Label>
                <Form.Control
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Write your email"
                  size="lg"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  className={styles.placeholder}
                />
                {formik.errors.email && formik.touched.email && (
                  <Form.Text className="fw-light text-danger">{formik.errors.email}</Form.Text>
                )}
              </Form.Group> */}
              <Button variant="primary" type="submit" className="w-100 mt-4" disabled={!formik.isValid}>
                Login
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
