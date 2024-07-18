/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { Card, Modal } from 'react-bootstrap'
import { CartContext } from '../../contexts/CartContext';

export const Cart = ({show,handleClose}) => {
    const { cart } = useContext(CartContext);

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
            </Card>
            ))}
          </ul>
        ) : (
          <p>El carrito está vacío</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <h5>Total: ${totalPrice.toFixed(2)}</h5>
      </Modal.Footer>
    </Modal>
  )
}
