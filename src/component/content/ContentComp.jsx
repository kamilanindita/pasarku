import React,  { Component, Fragment } from 'react';
import { Row, Card, Button, Col } from 'react-bootstrap';
import '../../component/content/ContentComp.css'

import { faCartPlus,faShoppingCart, faPlusSquare, faMinusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ContentComp extends Component {
	state = {
		order:this.props.order,
		img:'https://img1.ralali.id/mediaflex/500/assets/img/Libraries/293768_BEST-SELLER-TAS-WANITA-TAS-SEKOLAH-HOMME-FEMME-PREMIUM_XJ07TfeKTF25uE3B_1566588290.jpg',
		name:'kam',
		category:'ss',
		price:1000000,
		stock:2,

	}

	handleCounterChange =(newValue) => {
		this.props.OnCouterChange(newValue)
	}

	handlePlus = () => {
		this.setState({
			order:this.state.order+1
		}, () =>{
			this.handleCounterChange(this.state.order)
		})
	}

	handleMinus = () => {
		if(this.state.order > 0){
			this.setState({
				order:this.state.order-1
			}, () =>{
				this.handleCounterChange(this.state.order)
			})
		}
		this.handleCounterChange(this.state.order)
	}

render(){
return  (<Fragment>
			<Col xs={6} md={4} sm={4}  lg={3}>	
			<Card>
				<Card.Img variant="top" src={ this.state.img } />
				<Card.Body style={{ paddingTop:'1px', paddingBottom:'1px' }}>
					<Row>
						<Col className="text-left">
							<Card.Title id="namaProduk">{ this.state.name }</Card.Title>
							<Card.Subtitle className="xs-2 text-muted" id="kategori">{this.state.category }</Card.Subtitle>
						</Col>
					</Row>
					<Row>
						<Col className="text-left">
							<Card.Text className="xs-2 text-muted" id="harga">Rp.{ this.state.price }</Card.Text>
						</Col>
						<Col className="text-right">
							<Card.Text className="xs-2 text-muted" id="stok">Stok: { this.state.stock }</Card.Text>
						</Col>
					</Row>
				</Card.Body>
				<Card.Footer style={{ height:'50px' }}>
				<Row>
					<Col className="text-left">
						<Button size="sm" variant="info">Detail</Button> 
					</Col>
					<Col className="text-right">
						<FontAwesomeIcon icon={faCartPlus } size="2x"  style={{ color:'#26a0b6'}}/>
						{/* <div className="jumlah-item"><small>{ this.state.order }</small></div> */}
						{/* <a type="button" className="btn-minus" onClick={this.handleMinus }>
						<FontAwesomeIcon icon={faMinusSquare} size="1x" style={{ color:'#26a0b6'}}/>
						</a>
						<a type="button" className="btn-plus" onClick={this.handlePlus }>
						<FontAwesomeIcon icon={faPlusSquare} size="1x" style={{ color:'#26a0b6'}}/>
						</a> */}
					</Col>
					</Row>
				</Card.Footer>
			</Card>
			</Col>
		</Fragment>)
	}
}

// ContentComp.defaultProps={
// 	img:'https://img1.ralali.id/mediaflex/500/assets/img/Libraries/293768_BEST-SELLER-TAS-WANITA-TAS-SEKOLAH-HOMME-FEMME-PREMIUM_XJ07TfeKTF25uE3B_1566588290.jpg',
// 	name:'Title',
// 	category:'Fasion Pria',
// 	price:'1.000.000',
// 	stock:'100'
// }

export default ContentComp;