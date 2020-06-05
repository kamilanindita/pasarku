import React,  {  useState, Fragment } from 'react';
import { Carousel,Row , Col, Jumbotron } from 'react-bootstrap';


const ControlledCarousel = (props) => {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex)
    }
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ props.img1 }
            alt={ props.alt1 }
          />
          <Carousel.Caption>
            <p>{ props.cap1 }</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ props.img2 }
            alt={ props.alt2 }
          />
          <Carousel.Caption>
            <p>{ props.cap2 }</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ props.img3 }
            alt={ props.alt3 }
          />
          <Carousel.Caption>
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
