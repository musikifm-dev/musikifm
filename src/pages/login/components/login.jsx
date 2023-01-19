import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Form, Image, Spinner, Stack } from 'react-bootstrap'
import { useFormik } from 'formik'
import { loginValidationSchema } from 'utils/validationSchema'
import logoBlack from '../../../assets/img/logo-black.png'
import { route } from 'utils/constants'
import styles from '../index.module.scss'
import Icon from 'assets/svg'
import { Divider } from 'components/ui'
import { useLoginMutation } from 'store/api/auth'
import clsx from 'clsx'

export default function Login() {
  const [login] = useLoginMutation()
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const formik = useFormik({
    // validateOnMount: true,
    initialValues: {
      usernameEmail: '',
      password: '',
    },
    validateOnMount: true,
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
      setIsLoading(true)

      let newObj = { email: '', password: values.password }
      // !* Determine input field (email or username) and send right value to server
      if (values.usernameEmail.includes('@')) {
        newObj = { ...newObj, email: values.usernameEmail }
      } else {
        newObj = { username: values.usernameEmail, password: values.password }
      }
      const { data } = await login(newObj)
      localStorage.setItem('token', data.jwt)
      setIsLoading(false)
      navigate(route.home)
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
      <div className="row justify-content-center mt-5 px-2">
        <div className="d-flex flex-column justify-content-center align-items-center mt-12">
          <Link to={route.home}>
            <Image src={logoBlack} className={styles.img} />
          </Link>
          <div className="d-flex flex-column justify-content-center align-items-center mt-4">
            <h3 className={styles.title}>Login</h3>
            <div className={styles.description}>Go inside the best music experience!</div>
          </div>
          <Form className={clsx(styles.form, 'flex-column mt-4')} onSubmit={formik.handleSubmit}>
            <Stack gap={3}>
              <Form.Group>
                <Form.Label htmlFor="username" className={styles.label}>
                  Username / Email
                </Form.Label>
                <Form.Control
                  id="usernameEmail"
                  name="usernameEmail"
                  type="text"
                  placeholder="Write your username or email"
                  size="lg"
                  onChange={formik.handleChange}
                  value={formik.values.usernameEmail}
                  className={styles.placeholder}
                />
                {formik.errors.usernameEmail && formik.touched.usernameEmail && (
                  <Form.Text className="fs-7 fw-light text-danger px-1">{formik.errors.usernameEmail}</Form.Text>
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
                  <Form.Text className="fs-7 fw-light text-danger px-1">{formik.errors.password}</Form.Text>
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
            </Stack>
            <Button variant="primary" type="submit" className={styles.submit} size="lg">
              <Stack direction="horizontal" gap={2} className="d-flex justify-content-center">
                <div>Login</div>
                {isLoading && <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />}
              </Stack>
            </Button>

            <div className="mt-3 text-center">
              Are you new here?{' '}
              <Link to={route.register} className="fw-bold text-black">
                Sign Up
              </Link>
              <Divider text="or" />
              <Button variant="light" className="w-100 mt-3" size="lg">
                <Stack gap={5} direction="horizontal">
                  <Icon name="google" className={styles.loginIcon} />
                  <div className={styles.loginLabel}>Continue with Google</div>
                </Stack>
              </Button>
              <Button variant="light" className="w-100 mt-3" size="lg">
                <Stack gap={5} direction="horizontal">
                  <Icon name="apple" className={styles.loginIcon} />
                  <div className={styles.loginLabel}>Continue with Apple</div>
                </Stack>
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  )
}
