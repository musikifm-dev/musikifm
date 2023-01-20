import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, DropdownButton, Form, Image, Stack, Dropdown, Spinner } from 'react-bootstrap'
import { useFormik } from 'formik'
import { phoneCodes, route } from 'utils/constants'
import logoBlack from '../../assets/img/logo-black.png'
import styles from './index.module.scss'
import { useRegisterMutation } from 'store/api/auth'
import { registerValidationSchema } from 'utils/validationSchema'
import clsx from 'clsx'
import Icon from 'assets/svg'

export default function Register() {
  const [isLoading, setIsLoading] = useState(false)
  const [register] = useRegisterMutation()
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      phone: '',
      phoneValue: '+90',
      username: '',
      password: '',
      email: '',
      terms: false,
      inform: false,
    },
    validateOnMount: true,
    validationSchema: registerValidationSchema,
    onSubmit: (values) => {
      setIsLoading(true)

      const newObj = {
        phone: values.phoneValue + values.phone,
        username: values.username,
        password: values.password,
        email: values.email,
      }
      register(newObj)
      setIsLoading(false)
      navigate(route.home)
    },
  })

  return (
    <div className="container">
      <div className="row mt-4 justify-content-center">
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
      <div className="d-flex flex-column justify-content-center">
        <div className={'d-flex flex-column justify-content-center align-items-center mt-12'}>
          <Link to={route.home}>
            <Image src={logoBlack} className={styles.img} />
          </Link>
          <div className="d-flex flex-column justify-content-center align-items-center mt-4">
            <h3 className={styles.title}>Sign Up</h3>
            <div className={styles.description}>Enjoy the best music experience</div>
          </div>
          <Form className={clsx(styles.form, 'flex-column mt-4')} onSubmit={formik.handleSubmit}>
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
                  <Form.Text className="fs-7 fw-light text-danger px-1">{formik.errors.username}</Form.Text>
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
                  <Form.Text className="fs-7 fw-light text-danger px-1">{formik.errors.email}</Form.Text>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="phone" className={clsx('mb-3', styles.label)}>
                  Phone Number
                </Form.Label>
                <Form.Group className={styles.dropdown}>
                  <DropdownButton
                    id="phoneValue"
                    name="phoneValue"
                    variant="outline-secondary"
                    // defaultValue="+90"
                    title={formik.values.phoneValue}
                    size="lg"
                    className={styles.dropdown__btn}
                  >
                    {phoneCodes.map((item, i) => (
                      <Dropdown.Item
                        eventKey={item.value}
                        key={i}
                        className={styles.dropdown__item}
                        onClick={() => formik.setFieldValue('phoneValue', item.value)}
                        value={formik.values.phoneValue}
                      >
                        {item.value} {item.title}
                      </Dropdown.Item>
                    ))}
                  </DropdownButton>
                  <Form.Control
                    id="phone"
                    name="phone"
                    type="text"
                    placeholder="Write your mobile number"
                    size="lg"
                    className={clsx(styles.dropdown__input)}
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                  />
                </Form.Group>
                {formik.errors.phone && formik.touched.phone && (
                  <Form.Text className="fs-7 fw-light text-danger px-1">{formik.errors.phone}</Form.Text>
                )}
              </Form.Group>
            </Stack>
            <Stack gap={3} className="mt-4">
              <Form.Group>
                <Form.Check type="checkbox" id="terms" name="terms" className="fw-semibold">
                  <Form.Check.Input
                    type="checkbox"
                    onChange={formik.handleChange}
                    value={formik.values.terms}
                    isInvalid={!formik.values.terms}
                  />
                  <Form.Check.Label className={styles.checkboxLabel}>I aggree to Terms & Conditions</Form.Check.Label>
                </Form.Check>
                {formik.errors.terms && formik.touched.terms && (
                  <Form.Text className="fs-7 fw-light text-danger px-1">{formik.errors.terms}</Form.Text>
                )}

                <Form.Check type="checkbox" id="inform">
                  <Form.Check.Input type="checkbox" onChange={formik.handleChange} value={formik.values.inform} />
                  <Form.Check.Label className={styles.checkboxLabel}>
                    I&apos;d like being informed about <span>Musiki</span> news ant tips
                  </Form.Check.Label>
                </Form.Check>
              </Form.Group>

              <Button variant="primary" type="submit" className={styles.submit} size="lg">
                <Stack direction="horizontal" gap={2} className="d-flex justify-content-center">
                  <div> Sign up for free</div>
                  {isLoading && <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />}
                </Stack>
              </Button>
              <div className={styles.alreadyHaveAcc}>
                Do you have already account?{' '}
                <Link to={route.login} className={styles.login}>
                  Log in
                </Link>
              </div>
            </Stack>
          </Form>
        </div>
      </div>
    </div>
  )
}
