import { Auth } from 'components/Layout';
import { storageKey } from 'constant/storageKey';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const user = localStorage.getItem(storageKey.USER_INFO);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate('/v1');
  }, []);

  return <Auth registerForm />;
};

export default Signup;
