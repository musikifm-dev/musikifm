// import { useEffect, useState } from 'react'
import { Button, DropdownButton, Form, Image, Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { route } from 'utils/constants'
import logoBlack from '../../assets/img/logo-black.png'
// import { useCookie } from 'react-use'
// import { API_URL } from '../../utils/URL'
import Dropdown from 'react-bootstrap/Dropdown'
import styles from './index.module.scss'
import { useFormik } from 'formik'
import { useRegisterMutation } from 'store/api/auth'

export default function Register() {
  const [register] = useRegisterMutation()
  // const [cookies] = useCookie()
  // const [form, setForm] = useState({})

  // let navigate = useNavigate()
  // const url = API_URL

  // const setValue = (e) => {
  //   const target = e.target
  //   const name = target.name
  //   const value = target.value

  //   setForm({ ...form, [name]: value })
  // }

  // useEffect(() => {
  //   const checkCookie = () => {
  //     if (cookies.token) {
  //       return navigate('/dashboard')
  //     }
  //   }
  //   checkCookie()
  // })

  // const handleRegister = async (e) => {
  //   e.preventDefault()

  //   const req = await fetch(`${url}/api/auth/local/register`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(form),
  //   })
  //   const res = await req.json()
  //   console.log(res)
  //   if (res.jwt) {
  //     setForm({})
  //     e.target.reset()
  //     setSuccess(true)
  //   }
  // }

  const formik = useFormik({
    initialValues: {
      password: '',
      username: '',
      email: '',
    },
    onSubmit: (values) => {
      register(values)
      console.log(values)
      // phone: values.phone
      // nameSurname: values.nameSurname
      // email: values.email
    },
  })

  return (
    <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
      <Link to={route.home}>
        <Image src={logoBlack} width={200} height={41} />
      </Link>
      <div className="d-flex flex-column justify-content-center align-items-center mt-4">
        <h3 className="fs-3 fw-bold">Sign Up</h3>
        <div>Enjoy the best music experience</div>
      </div>
      <Form className="flex-column mt-4" onSubmit={formik.handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor="password" className={`mb-3 ${styles.label}`}>
            Your member
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
              <Dropdown.Item href="#">+243</Dropdown.Item>
            </DropdownButton>
            <Form.Control
              id="password"
              name="password"
              type="text"
              placeholder="Write your mobile number"
              size="lg"
              className={styles.dropdown__input}
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </Form.Group>
        </Form.Group>
        <Form.Group className="mt-3">
          <Form.Label htmlFor="username" className={styles.label}>
            Name, surname
          </Form.Label>
          <Form.Control
            id="username"
            name="username"
            type="text"
            placeholder="Write your name and surname"
            size="lg"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
        </Form.Group>
        <Form.Group className="mt-3">
          <Form.Label htmlFor="email" className={styles.label}>
            Your email
          </Form.Label>
          <Form.Control
            id="email"
            name="email"
            type="text"
            placeholder="Write your email"
            size="lg"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </Form.Group>
        {['checkbox'].map((type) => (
          <Stack key={`default-${type}`} gap={2} className="my-3">
            <Form.Check type={type} id={`default-${type}`} label="I aggree to Terms & Conditions" />
            <Form.Check type={type} id={`default-${type}`} label="I'd like being informed about Musiki news ant tips" />
          </Stack>
        ))}
        <Button variant="primary" type="submit" className="w-100">
          Sign Up for free
        </Button>
      </Form>
      <div className="mt-3">
        Do you have already account? <Link to={route.login}>Log in</Link>
      </div>
    </div>
  )
}
