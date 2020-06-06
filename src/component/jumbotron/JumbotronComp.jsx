import React,  {  useState, Fragment } from 'react';
import { Carousel,Row , Col, Jumbotron } from 'react-bootstrap';


const ControlledCarousel = (props) => {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex)
    }
  
    return (
      <Carousel  activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item  style={{ maxHeight:'400px' }}>
          <img
            className="w-100 img-fluid"
            src={ props.img1 }
            alt={ props.alt1 }
          />
          <Carousel.Caption>
          <a href="#"><buttom className="btn btn-outline-light btn-sm">Detail</buttom></a>
            <p>{ props.cap1 }</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item style={{ maxHeight:'400px' }}>
          <img
            className="w-100 img-fluid"
            src={ props.img2 }
            alt={ props.alt2 }
          />
          <Carousel.Caption>
          <a href="#"><buttom className="btn btn-outline-light  btn-sm">Detail</buttom></a>
            <p>{ props.cap2 }</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item style={{ maxHeight:'400px' }}>
          <img
            className="w-100 img-fluid"
            src={ props.img3 }
            alt={ props.alt3 }
          />
          <Carousel.Caption>
            <a href="#"><buttom className="btn btn-outline-light  btn-sm">Detail</buttom></a>
            <p>{ props.cap3 }</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>)
}

// ControlledCarousel.defaultProps={
//     img1:'https://cf.shopee.co.id/file/3af5c59fa5e6581c15d1f45596034da2',
//     img2:'https://cf.shopee.co.id/file/3af5c59fa5e6581c15d1f45596034da2',
//     img3:'https://cf.shopee.co.id/file/3af5c59fa5e6581c15d1f45596034da2',
//     alt1:'...',
//     alt2:'...',
//     alt3:'...',
//     cap1:'cap1',
//     cap2:'cap2',
//     cap3:'cap3',
// }

const JumbotronComp = (props) => {
    return  <Fragment>
              {/* <Jumbotron  style={{ backgroundColor:'#ffff', padding:'0', margin:'0'}} >
                <Row style={{ margin:'auto'}}>
                  {/* Slide Besar 
                    <Col sm={12} style={{ margin:'auto'}}>
                      <Row> */}
                        <ControlledCarousel
                          img1='https://image.freepik.com/free-vector/new-arrival-banner-template-yellow-blue-colors_1361-1655.jpg'
                          img2='https://image.freepik.com/free-psd/shopping-online-banner_23-2148561308.jpg'
                          img3='https://image.freepik.com/free-psd/banner-template-design-online-shopping_23-2148537544.jpg'
                          alt1='...'
                          alt2='...'
                          alt3='...'
                          cap1='cap1'
                          cap2='cap2'
                          cap3='cap3'
                         />
                     {/* </Row>
                    </Col> */}
                    {/* Slide Besar End */}

                    {/* Slide Kecil */}
                    {/* <Col sm={4} style={{ margin:'auto'}}>
                        <Row>
                          <ControlledCarousel 
                            img1='https://cf.shopee.co.id/file/3af5c59fa5e6581c15d1f45596034da2'
                            img2='https://cf.shopee.co.id/file/3af5c59fa5e6581c15d1f45596034da2'
                            img3='https://cf.shopee.co.id/file/3af5c59fa5e6581c15d1f45596034da2'
                            alt1='...'
                            alt2='...'
                            alt3='...'
                            cap1='cap1'
                            cap2='cap2'
                            cap3='cap3'
                          />
                        </Row>
                        <Row>
                          <ControlledCarousel 
                            img1='https://cf.shopee.co.id/file/3af5c59fa5e6581c15d1f45596034da2'
                            img2='https://cf.shopee.co.id/file/3af5c59fa5e6581c15d1f45596034da2'
                            img3='https://cf.shopee.co.id/file/3af5c59fa5e6581c15d1f45596034da2'
                            alt1='...'
                            alt2='...'
                            alt3='...'
                            cap1='cap1'
                            cap2='cap2'
                            cap3='cap3'
                          />
                        </Row>
                    </Col> */}
                    {/* Slide Kecil End */}
                 {/* </Row>
               </Jumbotron> */}
            </Fragment>
}

export default JumbotronComp;
