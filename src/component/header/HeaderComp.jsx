import React,  { Fragment } from 'react';
import { Row, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { faBars, faShoppingCart, faUserCircle, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './HeaderComp.css'
const HeaderComp = (props) => {
    return  (<Fragment>
                
                {/* Desktop Navbar */}
                <div className="d-none d-sm-block">
                <Navbar style={{ backgroundColor:'#fafcfc'}} expand="lg" m="auto" fixed="top">
                    <Navbar.Brand  href="#home">Pasarku</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Profile</Nav.Link>
                        <NavDropdown title="Produk" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                        </Form>
                        <FontAwesomeIcon icon={ faShoppingCart } size="2x"  style={{ margin: '5px', color: '#0aa3f0'}}/>
                    </Navbar.Collapse>
                </Navbar>
                </div>
                {/* Desktop Navbar End */}

                {/* Mobile Navbar */}
                <div className="d-block d-sm-none">
                <Navbar className="justify-content-center" style={{ backgroundColor:'#0aa3f0' }}  m="auto" fixed="top">
                    <Navbar.Brand className="text-white"  href="#home">Pasarku</Navbar.Brand>
                </Navbar>
                </div>
                <div className="d-block d-sm-none" style={{ marginBottom:'0px' }}>
                <Navbar className="justify-content-center navbar-expand" style={{ backgroundColor:'#0aa3f0'}} fixed="bottom">
                    <Nav.Link  href="#home"><FontAwesomeIcon icon={ faBars } size="2x"  style={{color: '#fff'}} /></Nav.Link>
                    <Form inline className="col-xs-2">
                    <FormControl type="text" placeholder="Search" style={{ maxHeight:'26px' }} className="col-xs-2"/>
                    </Form>
                    {/* <Button className="tombol"><FontAwesomeIcon icon={ faSearch } className="icon-tombol" /></Button> */}
                    <Nav.Link  href="#home"><FontAwesomeIcon icon={ faShoppingCart } size="2x" style={{color: '#fff'}}/></Nav.Link>
                    <Nav.Link  href="#home"><FontAwesomeIcon icon={ faUserCircle } size="2x" style={{color: '#fff'}}/></Nav.Link>
                </Navbar>
                </div>
                {/* Mobile Navbar End */}

            </Fragment>)
}

export default HeaderComp;
