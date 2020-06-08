import React,  { Fragment } from 'react';
import { Row, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { faBars, faShoppingCart, faUserCircle, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './HeaderComp.css'

const HeaderComp = (props) => {
    return  (<Fragment>
                
                {/* Desktop Navbar */}
                {/* style={{ backgroundColor:'#fafcfc'}} */}
                <div className="d-none d-sm-block">
                <Navbar style={{ backgroundColor:'#0aa3f0'}} expand="lg" m="auto" fixed="top">
                    <Navbar.Brand className="text-light" href="#home">Pasarku</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link className="text-light" href="/">Home</Nav.Link>
                        <Nav.Link className="text-light" href="/profil">Profile</Nav.Link>
                        <Nav.Link className="text-light" href="/produk">Produk</Nav.Link>
                        </Nav>
                        <Form inline>
                        <FormControl type="text" placeholder="Cari..." className="mr-sm-2" />
                        <Button><FontAwesomeIcon icon={ faSearch } /></Button>
                        </Form>
                        <Nav.Link id="cart-top"  href="#home"><FontAwesomeIcon icon={ faShoppingCart } size="2x"  style={{  color: '#fff'}}/><div id="cart-item-top">{ props.cart }</div></Nav.Link>
                        <Nav.Link id="user-top"  href="#home"><FontAwesomeIcon icon={ faUserCircle } size="2x" style={{color: '#fff'}}/><div id="username-top">{ props.username }</div></Nav.Link>
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
                    <div className="dropup">
                    <Nav.Link className="dropbtn"  href="#home"><FontAwesomeIcon icon={ faBars } size="2x"  style={{color: '#fff'}} /></Nav.Link>
                    <div className="dropup-content">
                        <a href="/">Home</a>
                        <a href="/profil">Profil</a>
                        <a href="/produk">Produk</a>
                    </div>
                    </div>
                    <Form inline className="col-xs-2">
                    <FormControl type="text" placeholder="Cari..." style={{ maxHeight:'26px' }} className="col-xs-2"/>
                    </Form>
                    {/* <Button className="tombol"><FontAwesomeIcon icon={ faSearch } className="icon-tombol" /></Button> */}
                     <Nav.Link id="cart-bottom"  href="#home"><FontAwesomeIcon icon={ faShoppingCart } size="2x" style={{color: '#fff'}}/><div id="cart-item-bottom">{ props.cart }</div></Nav.Link>
                    <Nav.Link id="user-bottom"  href="#home"><FontAwesomeIcon icon={ faUserCircle } size="2x" style={{color: '#fff'}}/><div id="username-bottom">{ props.username }</div></Nav.Link>
                </Navbar>
                </div>
                {/* Mobile Navbar End */}

            </Fragment>)
}

HeaderComp.defaultProps={
    cart:'0',
    username:'kamil'
}

export default HeaderComp;
