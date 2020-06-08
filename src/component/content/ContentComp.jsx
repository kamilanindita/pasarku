import React,  { Component, Fragment } from 'react';
import { Row, Card, Button, Col, Modal } from 'react-bootstrap';
import '../../component/content/ContentComp.css'
import { faCartPlus, faWindowClose ,faShoppingCart, faPlusSquare, faMinusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ContentComp extends Component {
	state = {
		order:this.props.order,
		img:this.props.img,
		name:this.props.name,
		category:this.props.category,
		price:this.props.price,
		stock:2,
		show: false,

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

		
	
	handleClose = () => {
		this.setState({
			show:false
		})
	} 
	handleShow = () => {
		this.setState({
			show:true
		})
	}


render(){
return  (<Fragment>
			<Modal
				show={this.state.show}
				onHide={this.handleClose}
				backdrop="static"
				keyboard={false}
			>
				<Modal.Header closeButton>
				<Modal.Title>
					{this.state.name} <br></br>
					<small style={{ fontSize:'12px'}}>Kategori: {this.state.category }</small>
				</Modal.Title>
				</Modal.Header>
				<img src={ this.state.img } style={{ maxHeight:'400px' }}/>
				<Modal.Body className="text-justify">
				<small style={{ fontSize:'12px'}}><strong>Harga: Rp.{this.state.price }</strong></small>
				<h5 className="text-muted">Keterangan:</h5>
				 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
				</Modal.Body>
				<Modal.Footer>
				<Button variant="danger" onClick={this.handleClose}><FontAwesomeIcon size="2x" icon={ faWindowClose }/></Button>
				<Button><FontAwesomeIcon size="2x" icon={faCartPlus }/></Button>
				</Modal.Footer>
			</Modal>

			<Col xs={6} md={4} sm={4}  lg={3} style={{ marginBottom:'8px' }}>	
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
						<Button size="sm" variant="info" onClick={this.handleShow} >Detail</Button> 
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