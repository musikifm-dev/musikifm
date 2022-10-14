import { useEffect } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { API_URL } from '../URL';
import PropTypes from 'prop-types';

export default function LoginRedirect({ setCookie }) {
  const { providerName } = useParams();
  const [searchParams] = useSearchParams();

  let navigate = useNavigate();

  useEffect(() => {
    const altLogin = async () => {
      const req = await fetch(
        API_URL + `/api/auth/${providerName}/callback?access_token=${searchParams.get('access_token')}`,
      );
      const res = await req.json();

      console.log(res);

      if (res.jwt) {
        setCookie('token', res.jwt, { path: '/' });
        return navigate('/profile');
      }
    };
    altLogin();
  });

  return <div className="page">Login With {providerName}</div>;
}

LoginRedirect.propTypes = {
  setCookie: PropTypes.any,
};
