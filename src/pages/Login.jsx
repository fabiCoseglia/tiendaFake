import { Button, Form, Image, } from 'react-bootstrap';
import logo from '../assets/login.png'
import Swal from 'sweetalert2';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  //handles
  const handleSubmit = async (e) =>{
    e.preventDefault();
    if (email === "challenge@alkemy.org" && password === "react") {
      //llamado a la API
      axios
        .post("http://challenge-react.alkemy.org", { email, password })
        .then((res) => {
          const data = {
            token: res.data.token,
            username: "TiendaUser",
          };
          Swal.fire({
            text: "Login Success!",
            icon: "success",
            showConfirmButton: false,
            timer: 1500
          });
          sessionStorage.setItem("token", data.token);
          sessionStorage.setItem("username", data.username);
          sessionStorage.setItem("cart", data.cart);
          return navigate("/");
        });
      //llamado a la API
    }else{
     return Swal.fire({
        text: "Incorrect credentialss",
        icon: "error",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }

  
  const handleInfoButton= ()=>{
    Swal.fire({
      title: "Debes iniciar sesion SOLO con este usuario:",
      text: "EMAIL: challenge@alkemy.org, PASS: react" ,
      icon: "info"
    });
  }

  return (
    <Form onSubmit={handleSubmit} className="container d-flex flex-column justify-content-center align-items-center mt-5" style={{height:'55vh',width:'40vh',backgroundColor:'white',borderRadius:'1rem'}}>
      <Image src={logo}  width={'100rem'}/>
      <Form.Group className="mb-3" controlId="formGroupEmail" >
        <Form.Label>Email:</Form.Label>
        <Form.Control type="text" placeholder="Ingrese email" name='email' onChange={(e) => setEmail(e.target.value)}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' onChange={(e) => setPassword(e.target.value)}/>
      </Form.Group>
      <div className='d-flex mt-2 gap-2'>
      <Button type='submit' variant='dark'>Login</Button>
      <Button variant='dark' onClick={handleInfoButton}>Info</Button>
      </div>


      
    </Form>

  );
}
