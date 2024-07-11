import { faBitcoinSign, faDollarSign, faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from 'react-bootstrap';
import './circlesHome.css'
export const CirclesHome = () => {
  return (
    <Row className='backgraundCircles'>
      <Col className='d-flex justify-content-around mt-3'>
        <div>
        <div
          className='shadow'
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            backgroundColor: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <FontAwesomeIcon icon={faDollarSign} size="3x" className='text-success' />
        </div>
          <b><p className='text-center mt-1 text-success'>Offers</p></b>
        </div>
        <div>
        <div
          className='shadow'
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            backgroundColor: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <FontAwesomeIcon icon={faTruck} size="3x" className='text-success' />
        </div>
          <b><p className='text-center mt-1 text-success'>Shipping</p></b>
        </div>
        <div>
        <div
          className='shadow'
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            backgroundColor: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <FontAwesomeIcon icon={faBitcoinSign} size="3x" className='text-success' />
        </div>
          <b><p className='text-center mt-1 text-success'>Bitcoins !</p></b>
        </div>
      </Col>
    </Row>
  );
};
