import { Button, Form, Image } from 'react-bootstrap';
import login from '../assets/login.png'
import { Form as RouterForm } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useState } from 'react';


export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleInfoButton= ()=>{
    Swal.fire({
      title: "Debes iniciar sesion SOLO con este usuario:",
      text: "EMAIL: challenge@alkemy.org, PASS: react" ,
      icon: "info"
    });
  }

  return (
    <div
      className="container d-flex flex-column justify-content-center align-items-center mt-4 shadow-md"
      style={{
        backgroundColor: "white",
        width: "40vh",
        borderRadius: "1rem",
        height: "80vh",
      }}
    >
      <Image src={login} width={"135rem"} className="p-2" />
      <RouterForm method="post" action="/login" className="m-4">
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button className="btn btn-dark mt-4" type="submit" variant="dark">
          Login
        </Button>
        <Button
          className="btn btn-dark mt-4 mx-2"
          onClick={handleInfoButton}
          variant="dark"
        >
          Info
        </Button>
      </RouterForm>
    </div>
  );
}
