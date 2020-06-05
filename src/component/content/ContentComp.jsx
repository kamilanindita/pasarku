import React,  { Fragment } from 'react';
import { Row, Card, Button, Col } from 'react-bootstrap';
import '../../component/content/ContentComp.css'

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContentComp = (props) => {
return  (<Fragment>
			<Col xs={6} md={4} sm={4}  lg={3}>	
			<Card>
				<Card.Img variant="top" src={ props.img } />
				<Card.Body>
					<Card.Title id="namaProduk">{ props.name }</Card.Title>
					<Card.Subtitle className="xs-2 text-muted" id="kategori">{ props.category }</Card.Subtitle>
					<Row>
						<Col className="text-left">
							<Card.Text className="xs-2 text-muted" id="harga">{ props.price }</Card.Text>
						</Col>
						<Col className="text-right">
							<Card.Text className="xs-2 text-muted" id="stok">Stok: { props.stock }</Card.Text>
						</Col>
					</Row>
				</Card.Body>
				<Card.Footer>
				<Row>
					<Col className="text-left">
						<Button size="sm" variant="primary">Detail</Button> 
					</Col>
					<Col className="text-right">
						<FontAwesomeIcon icon={faShoppingCart} size="2x"  style={{ color: '#0aa3f0'}}/>
						<div className="jumlah-item"><small>1</small></div>
					</Col>
					</Row>
				</Card.Footer>
			</Card>
			</Col>
        </Fragment>)
}

ContentComp.defaultProps={
	img:'https://img1.ralali.id/mediaflex/500/assets/img/Libraries/293768_BEST-SELLER-TAS-WANITA-TAS-SEKOLAH-HOMME-FEMME-PREMIUM_XJ07TfeKTF25uE3B_1566588290.jpg',
	name:'Title',
	category:'Fasion Pria',
	price:'Rp.1.000.000',
	stock:'100'
}

export default ContentComp;