import {Carousel, Col, Image, Row } from "react-bootstrap"
import logo1 from '../../assets/Logo1.jpg'
import logo2 from '../../assets/Logo2.jpg'
import './bannerHome.css'

export const BannerHome = () => {
    const logos = [logo1, logo2];

  return (
    <>
    <Row>
      <Col>
        <Carousel>
          {logos.map((logo, index) => (
            <Carousel.Item key={index}>
              <Image src={logo} className="carousel-image" fluid />
            </Carousel.Item>
          ))}
        </Carousel>
      </Col>
    </Row>
    </>
    
  )
}
