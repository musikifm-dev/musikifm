// import { useEffect, useState } from 'react'
import { Button, DropdownButton, Form, Image, Stack, Dropdown } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { route } from 'utils/constants'
import logoBlack from '../../assets/img/logo-black.png'
// import { useCookie } from 'react-use'
// import { API_URL } from '../../utils/URL'
import styles from './index.module.scss'
import { useFormik } from 'formik'
import { useRegisterMutation } from 'store/api/auth'
import { registerValidationSchema } from 'utils/validationSchema'
import clsx from 'clsx'
import Icon from 'assets/svg'

export default function Register() {
  const [register] = useRegisterMutation()
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      phoneNumber: '',
      username: '',
      password: '',
      email: '',
      termsAndConditions: '',
    },
    validationSchema: registerValidationSchema,
    onSubmit: (values) => {
      register(values)
      console.log(values)
    },
  })

  return (
    <div className="container">
      <div className="row mt-5 justify-content-center">
        <div className="col-10">
          <div className={styles.icon}>
            <Link className={styles.icon__link} onClick={() => navigate(-1)}>
              <Icon name="prev" size={30} className={styles.icon__item} />
            </Link>
            <Link className={styles.icon__link} to={route.home}>
              <Icon name="close" size={30} className={styles.icon__item} />
            </Link>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-center mt-5 px-5">
        <div className={clsx('d-flex flex-column justify-content-center align-items-center mt-12', styles.x)}>
          <Link to={route.home}>
            <Image src={logoBlack} width={200} height={41} />
          </Link>
          <div className="d-flex flex-column justify-content-center align-items-center mt-4">
            <h3 className="fs-3 fw-bold">Sign Up</h3>
            <div>Enjoy the best music experience</div>
          </div>
          <Form className="flex-column mt-4" onSubmit={formik.handleSubmit}>
            <Stack gap={3}>
              <Form.Group>
                <Form.Label htmlFor="username" className={styles.label}>
                  Username
                </Form.Label>
                <Form.Control
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Write your name and surname"
                  size="lg"
                  onChange={formik.handleChange}
                  value={formik.values.username}
                  className={styles.placeholder}
                />
                {formik.errors.username && formik.touched.username && (
                  <Form.Text className="fw-light text-danger">{formik.errors.username}</Form.Text>
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
              <Form.Group>
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
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="phoneNumber" className={clsx('mb-3', styles.label)}>
                  Phone Number
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
            </Stack>
            <Stack gap={3} className="mt-4">
              <Form.Check
                type="checkbox"
                id="termsAndConditions"
                name="termsAndConditions"
                onChange={formik.handleChange}
                value={formik.values.termsAndConditions}
                className="fw-semibold"
              >
                <Form.Check.Input type="checkbox" />
                <Form.Check.Label>I aggree to Terms & Conditions</Form.Check.Label>
              </Form.Check>
              {formik.errors.termsAndConditions && formik.touched.termsAndConditions && (
                <Form.Text className="fw-light text-danger">{formik.errors.termsAndConditions}</Form.Text>
              )}
              {/* <Form.Check type={type} id={`default-${type}`} label="I'd like being informed about Musiki news ant tips" /> */}

              <Button variant="primary" type="submit" className="w-100">
                Sign Up for free
              </Button>
              <div>
                Do you have already account? <Link to={route.login}>Log in</Link>
              </div>
            </Stack>
          </Form>
        </div>
      </div>
    </div>
  )
}
