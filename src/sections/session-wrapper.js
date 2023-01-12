import { Spinner } from 'react-bootstrap'
import { useGetMyDataQuery } from 'store/api/auth'
import PropTypes from 'prop-types'

export default function SessionWrapper({ children }) {
  const { isLoading } = useGetMyDataQuery({ refetchOnReconnect: true, refetchOnMountOrArgChange: true })

  if (isLoading)
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner />
      </div>
    )

  return <div>{children}</div>
}

SessionWrapper.propTypes = {
  children: PropTypes.node,
}
