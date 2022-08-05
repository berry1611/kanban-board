import { Button, Input, Typography } from 'components/UI';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, signup } from 'state/action-creators/auth';
import { ContainerBG, Container, Form, LinkStyled } from './AuthStyled';

const initialState = { name: '', email: '', password: '', password_confirmation: '' };

const Auth = ({ registerForm }) => {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (registerForm) {
      dispatch(signup(formData, navigate));
    } else {
      dispatch(login({ email: formData.email, password: formData.password }, navigate));
    }
  };

  return (
    <ContainerBG>
      <Container>
        <Typography fontSize={24}>{registerForm ? 'Sign Up' : 'Login'}</Typography>
        <Form onSubmit={handleSubmit}>
          {registerForm && (
            <>
              <Typography bold>Name</Typography>
              <Input name="name" placeholder="Name" type="text" required onChange={handleChange} />
            </>
          )}
          <Typography bold>Email</Typography>
          <Input name="email" placeholder="Email" type="email" required onChange={handleChange} />
          <Typography bold>Password</Typography>
          <Input name="password" placeholder="Password" type="password" required onChange={handleChange} />
          {registerForm && (
            <>
              <Typography bold>Password Confirmation</Typography>
              <Input name="password_confirmation" placeholder="Password" type="password" required onChange={handleChange} />
            </>
          )}
          <br />
          <Button type="submit" bold color="primary" width="100%" padding="4px 16px" justifyContent="center" boxShadow="0px 1px 2px rgba(0, 0, 0, 0.12)" borderRadius={8} fontSize={14} lineHeight={24}>
            {registerForm ? 'Sign Up' : 'Login'}
          </Button>
        </Form>
        {!registerForm ? (
          <Typography>
            Don't have an account? <LinkStyled to="/v1/signup">Sign Up</LinkStyled>
          </Typography>
        ) : (
          <Typography>
            Already have an account? <LinkStyled to="/v1/login">Login</LinkStyled>
          </Typography>
        )}
      </Container>
    </ContainerBG>
  );
};

export default Auth;
