import { Link, useNavigate } from 'react-router-dom'
import { Button, Form, Image, Stack } from 'react-bootstrap'
import clsx from 'clsx'
import { useFormik } from 'formik'
import styles from '../index.module.scss'
import { route } from 'utils/constants'
import Icon from 'assets/svg'
import logoBlack from '../../../assets/img/logo-black.png'
import { useDispatch } from 'react-redux'
import { setStep } from 'store/slices/auth'
import useCountdown from 'utils/hooks/useCountdown'
import { OtpInput } from 'components/ui'
import { useState } from 'react'

export default function SmsVerification() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { time } = useCountdown(60, 1000)
  const [otp, setOtp] = useState('')
  const onChange = (value) => setOtp(value)
  console.log(time)

  const formik = useFormik({
    initialValues: {
      phoneNumber: '',
    },
    onSubmit: (values) => {
      dispatch(setStep(1)) // if submitting succesfully get back step state to initial val - 1
      console.log(values)
    },
  })

  return (
    <div className="container">
      <div className="row mt-5 justify-content-center">
        <div className="col-10">
          <div className={clsx(styles.icon, styles.spaceBetween)}>
            <Link className={styles.icon__link} onClick={() => dispatch(setStep(1))}>
              <Icon name="prev" size={30} className={styles.icon__item} />
              <div className={styles.icon__text}>Geri</div>
            </Link>
            <Link className={styles.icon__link} to={route.home}>
              <Icon name="close" size={30} className={styles.icon__item} />
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
              <h3 className="fs-3 fw-bold">Tek Kullanımlık Şifre</h3>
              <div className="text-center">
                Devam edebilmek için +905324553432 numaralı telefona gönderilen tek kullanımlık şifreyi gir.
              </div>
            </div>
            <Form className={clsx('flex-column mt-4', styles.form)} onSubmit={formik.handleSubmit}>
              <Form.Group>
                <Form.Label htmlFor="phoneNumber" className={clsx('mb-3', styles.label, styles.timer)}>
                  <div className="timer">{time}</div>
                </Form.Label>
                <Form.Group className={styles.dropdown}>
                  <OtpInput value={otp} valueLength={4} onChange={onChange} />
                </Form.Group>
                {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                  <Form.Text className="fw-light text-danger">{formik.errors.phoneNumber}</Form.Text>
                )}
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 mt-4" onClick={() => navigate(route.home)}>
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
                <Button variant="light" className="w-100 mt-3" onClick={() => navigate('/login/email-verification')}>
                  <Stack gap={3} direction="horizontal">
                    <Icon name="phone" size={24} className={styles.phoneIcon} />
                    <div className="fs-6 fw-medium">Telefonun yaninda yok mu?</div>
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
