/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import { CartContext } from '../../contexts/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

export const Cart = ({show,handleClose}) => {
  const { cart,removeFromCart } = useContext(CartContext);

    const handleBuy = () => {
      Swal.fire({
        title: "Hey!",
        text: "Thanks for watching my project :)",
        icon: "success",
      });
    };

    const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);  
    return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Carrito de Compras</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cart.length > 0 ? (
          <ul>
            {cart.map((item, index) => (
              <Card key={index} className="mb-3 p-1" style={{ display: 'flex', flexDirection: 'row' }}>
                <Card.Img variant="left" src={item.image} style={{ width: '50px',objectFit:'contain' }} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text className='text-success'><b>${item.price * item.quantity}</b><small className='text-dark'> - Quantity: {item.quantity} </small></Card.Text>
                </Card.Body>
                <FontAwesomeIcon className='btn btn-danger' icon={faTimes} onClick={() => removeFromCart(item.id)} />
             </Card>
            ))}
          </ul>
        ) : (
          <p>El carrito está vacío</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        {
          cart.length > 0
          &&
          <Button variant='success' onClick={handleBuy}>Buy</Button>
        }
        <h5>Total: ${totalPrice.toFixed(2)}</h5>
      </Modal.Footer>
    </Modal>
  )
}
