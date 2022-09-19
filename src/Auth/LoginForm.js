import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import { URL_LOGIN } from "../utils/config";
const LoginForm = ({ setCookie }) => { 
  
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);


  const setValue = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setForm({ ...form, [name]: value });
  };


  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);

    const req = await fetch(
      URL_LOGIN,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      }
    );
    const res = await req.json();

    if (res.jwt) {
      setCookie("token", res.jwt, { path: "/" });
    }

    setLoading(false);
  };
  
  return(
<div className='page'>
<div className='container'>
<Form onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="identifier">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="identifier" type="email" placeholder="Enter email" onChange={setValue} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" onChange={setValue} />
      </Form.Group>
  
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>

</div>
</div>
)};

export default LoginForm;