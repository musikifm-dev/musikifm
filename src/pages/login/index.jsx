import { useSelector } from 'react-redux'
import { Login, SmsVerification } from '../../pages'

const LoginProvider = () => {
  const step = useSelector((state) => state.auth.step)

  const renderSwitch = () => {
    switch (step) {
      case 1:
        return <Login />
      case 2:
        return <SmsVerification />
      default:
        console.log('DEFAKT')
    }
  }

  return <div>{renderSwitch()}</div>
}

export default LoginProvider
