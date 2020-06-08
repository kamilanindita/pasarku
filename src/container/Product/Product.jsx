import React, { Component, Fragment } from 'react';
import { Container ,Row } from 'react-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../component/content/ContentComp.css'

import CategoryComp from '../../component/category/CategoryComp'
import ContentComp from '../../component/content/ContentComp'
import DetailCategoryProduct from './DetailCategoryProduct'

import { faAngleLeft, faAngleRight  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import $ from 'jquery';

class Product extends Component {
    constructor(){
        super()
        this.state = {
            user:'Anin',
            order:0,
            posts:[]
        }
        this.scrollKategori = this.scrollKategori.bind(this)
        this.scrollpalingDicari = this.scrollpalingDicari.bind(this)
      }
    
    
    scrollKategori(direction){
        let far = $( '#katagori-container' ).width()/2*direction;
        let pos = $('#katagori-container').scrollLeft() + far;
        $('#katagori-container').animate( { scrollLeft: pos }, 1000)
    }

    scrollpalingDicari(direction){
        let far = $('#palingDicari-container').width()/2*direction;
        let pos = $('#palingDicari-container').scrollLeft() + far;
        $('#palingDicari-container').animate( { scrollLeft: pos }, 1000)
    }

    handleCouterChange = (newValue) => {
        this.setState({
            order:newValue
        })
    }


    render(){
        return(

                 <Fragment>
                    {/* Category Component */}
                    <Container className="container-kategori" style={{ marginTop:'65px' }}>
                    <div className="container-content" >
                    <h4>Kategori</h4>
                    <div className="float-right lainnya"><a className="text-lainnya text-muted" href="/produk">Lainnya<FontAwesomeIcon  icon={ faAngleRight }  style={{ color: '#d1d1d1'}}/></a></div>
                    <buttom className="prev" onClick={this.scrollKategori.bind(null,-1)}><FontAwesomeIcon icon={ faAngleLeft } size="2x"  style={{ color: '#d1d1d1'}}/></buttom>
                    <div className="scrolling-wrapper row flex-row flex-nowrap" id="katagori-container">
                        <CategoryComp name="Fasion Pria" img="https://image.freepik.com/free-vector/men-clothes-colletction_23-2147523747.jpg"/>
                        <CategoryComp name="Fasion Wanita" img="https://image.freepik.com/free-vector/womens-fashion_459-204.jpg"/>
                        <CategoryComp name="Topi" img="https://image.freepik.com/free-vector/hat-types-icons-set-headdress-cartoon-style_96318-2955.jpg"/>
                        <CategoryComp name="Tas Wanita" img="https://image.freepik.com/free-vector/great-collection-colorful-woman-s-bags_23-2147576770.jpg?1"/>
                        <CategoryComp name="Pertanian" img="https://image.freepik.com/free-vector/agricultural-man-with-baskets-full-veggies_52683-22992.jpg"/>
                        <CategoryComp name="Pertenakan" img="https://image.freepik.com/free-vector/cartoon-farmer-holding-basket-eggs-white-background_29190-4972.jpg"/>
                        <CategoryComp name="Kerajinan" img="https://image.freepik.com/free-vector/it-yourself_23-2148515189.jpg"/>
                    </div>
                    <buttom className="next" onClick={this.scrollKategori.bind(null,1)}><FontAwesomeIcon icon={ faAngleRight } size="2x"  style={{ color: '#d1d1d1'}}/></buttom>
                    </div>
                    </Container>
                    {/* Category Component End */}

            {/* Mush Search Component */}
            <Container style={{  backgroundColor:'#fafcfc', marginTop:'20px'}} className="container-content">
                <h4>Fasion Pria</h4>
                <div className="float-right lainnya"><a className="text-lainnya text-muted" href="/produk/kategori/fasion-pria">Lainnya<FontAwesomeIcon  icon={ faAngleRight }  style={{ color: '#d1d1d1'}}/></a></div>
                <Row>
                <ContentComp name="Celana Cionis" category="Pria" price="120.000" stock="20" img='https://s.blanja.com/picspace/970/122826/2000.1948_d4b873a1894a442c888b4556296f9aa8.jpg'/>
                <ContentComp name="Celana Cionis" category="Pria" price="120.000" stock="20" img='https://s.blanja.com/picspace/970/122826/2000.1948_d4b873a1894a442c888b4556296f9aa8.jpg'/>
                <ContentComp name="Celana Cionis" category="Pria" price="120.000" stock="20" img='https://s.blanja.com/picspace/970/122826/2000.1948_d4b873a1894a442c888b4556296f9aa8.jpg'/>
                <ContentComp name="Celana Cionis" category="Pria" price="120.000" stock="20" img='https://s.blanja.com/picspace/970/122826/2000.1948_d4b873a1894a442c888b4556296f9aa8.jpg'/>
                </Row>
            </Container>

            {/* Mush Search Component */}
            <Container style={{  backgroundColor:'#fafcfc', marginTop:'20px'}} className="container-content">
                <h4>Fashion Wanita</h4>
                <div className="float-right lainnya"><a className="text-lainnya text-muted" href="/produk/kategori/fasion-wanita">Lainnya<FontAwesomeIcon  icon={ faAngleRight }  style={{ color: '#d1d1d1'}}/></a></div>
                <Row>
                    <ContentComp name="Baju" category="Wanita" price="120.000" stock="20" img="https://www.inspiradata.com/wp-content/uploads/2018/05/manekin.jpg"/>
                    <ContentComp name="Baju" category="Wanita" price="120.000" stock="20" img="https://www.inspiradata.com/wp-content/uploads/2018/05/manekin.jpg"/>
                    <ContentComp name="Baju" category="Wanita" price="120.000" stock="20" img="https://www.inspiradata.com/wp-content/uploads/2018/05/manekin.jpg"/>
                    <ContentComp name="Baju" category="Wanita" price="120.000" stock="20" img="https://www.inspiradata.com/wp-content/uploads/2018/05/manekin.jpg"/>
                </Row>
            </Container>

            {/* Mush Search Component */}
            <Container style={{  backgroundColor:'#fafcfc', marginTop:'20px'}} className="container-content">
                <h4>Tas</h4>
                <div className="float-right lainnya"><a className="text-lainnya text-muted" href="/produk/kategori/tas">Lainnya<FontAwesomeIcon  icon={ faAngleRight }  style={{ color: '#d1d1d1'}}/></a></div>
                <Row>
                    <ContentComp name="Tas Wanita" category="Tas" price="120.000" stock="20" img="https://ecs7.tokopedia.net/img/cache/700/product-1/2018/5/1/2601608/2601608_74cd357e-621d-4b31-ba4a-497b8c6cd44a_900_900.jpg"/>
                    <ContentComp name="Tas Selempang" category="Tas" price="250.000" stock="20" img="https://ecs7.tokopedia.net/img/cache/700/product-1/2018/2/17/0/0_6060bf5d-ed4a-40d7-8bf3-14277773219c_629_629.jpg"/>
                    <ContentComp name="Tas Pinggang Pria" category="Tas" price="550.000" stock="20" img="https://www.jakartanotebook.com/images/products/101/63/38945/2/tas-pinggang-pria-bahan-genuine-leather-mba62-black-1.jpg"/>
                    <ContentComp name="Tas Selempang Pria" category="Tas" price="550.000" stock="20" img="https://id-live-01.slatic.net/p/1be625633b5d043d9c0da31272832743.jpg"/>
                </Row>
            </Container>
        </Fragment>)
    }

}

export default Product;
