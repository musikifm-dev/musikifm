import { Button, Dropdown, DropdownButton, Form, Image } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
// import { useCookies } from 'react-cookie'
import { useFormik } from 'formik'
import { useRegisterMutation } from 'store/api/auth'
import { registerValidationSchema } from 'utils/validationSchema'
import logoBlack from '../../assets/img/logo-black.png'
import { route } from 'utils/constants'
import clsx from 'clsx'
import styles from './index.module.scss'
import Icon from 'assets/svg'

const Login = () => {
  
  return <>LOGIN LOGIC</>
}

export default Login
