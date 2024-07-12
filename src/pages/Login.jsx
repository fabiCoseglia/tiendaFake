import { Form, Image } from 'react-bootstrap';
import login from '../assets/login.png'
import { Link } from 'react-router-dom';


export const Login = () => {
  return (
    <div
      className="container d-flex flex-column justify-content-center align-items-center mt-4 shadow-md"
      style={{backgroundColor:'white',width:'40vh' ,borderRadius:'1rem',height:'65vh' }}
    >
      <Image src={login} width={"135rem"} className='p-2'/>
      <Form className="m-4">
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="text" placeholder="Email" name="email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
          />
        </Form.Group>
        <Link className='btn btn-dark mt-4' type="submit" variant="dark">
          Enviar
        </Link>
      </Form>
    </div>
  );
}
