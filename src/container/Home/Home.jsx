import React, { Component, Fragment } from 'react';
import { Container ,Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../component/content/ContentComp.css'

// import HeaderComp from '../../component/header/HeaderComp'
import JumbotronComp from '../../component/jumbotron/JumbotronComp'
import CategoryComp from '../../component/category/CategoryComp'
import ContentComp from '../../component/content/ContentComp'
// import FooterComp from '../../component/footer/FooterComp'
// import Product from '../../container/Product/Product'

import { faAngleLeft, faAngleRight  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import $ from 'jquery';
//import axios from 'axios';
// import { BrowserRouter, Route, Link } from 'react-router-dom';


class Home extends Component {
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

    //componentDidMount(){
    //     // fetch('https://jsonplaceholder.typicode.com/posts')
    //     // .then(response => response.json())
    //     // .then(json => {
    //     //     this.setState({
    //     //         posts:json
    //     //     })
    //     // })

    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //     .then((result)=> {
    //         this.setState({
    //             posts: result.data
    //         })
    //     })
    //}

    render(){
        return (
            <Fragment>
            {/* <BrowserRouter> */}
            {/* Header Component */}
            {/* <Container fluid>
                <HeaderComp cart={ this.state.order } username={ this.state.user }/>
            </Container> */}
            {/* Header Component End */}

            {/* Jumbotron Component */}
            <Container fluid style={{ marginTop:'50px',padding:'0'}} >
                <JumbotronComp/>
            </Container>
             {/* Jumbotron Component End */}

             {/* Category Component */}
            <Container className="container-kategori">
            <div className="container-content" >
            <h4>Kategori</h4>
            <div className="float-right lainnya"><a className="text-lainnya text-muted" href="/produk">Lainnya<FontAwesomeIcon  icon={ faAngleRight }  style={{ color: '#d1d1d1'}}/></a></div>            
            <buttom className="prev" onClick={this.scrollKategori.bind(null,-1)}><FontAwesomeIcon icon={ faAngleLeft } size="2x"  style={{ color: '#d1d1d1'}}/></buttom>
            <div className="scrolling-wrapper row flex-row flex-nowrap" id="katagori-container">
                <CategoryComp name="Fashion Pria" img="https://image.freepik.com/free-vector/men-clothes-colletction_23-2147523747.jpg"/>
                <CategoryComp name="Fashion Wanita" img="https://image.freepik.com/free-vector/womens-fashion_459-204.jpg"/>
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
                <h4>Paling Dicari</h4>
                <div className="float-right lainnya"><a className="text-lainnya text-muted" href="#">Lainnya<FontAwesomeIcon  icon={ faAngleRight }  style={{ color: '#d1d1d1'}}/></a></div>
                <div className="container-content" >
                <a className="prev" onClick={this.scrollpalingDicari.bind(null,-1)}><FontAwesomeIcon icon={ faAngleLeft } size="2x"  style={{ color: '#d1d1d1'}}/></a>
                <div className="scrolling-wrapper row flex-row flex-nowrap" id="palingDicari-container">
                    <ContentComp name="Celana Cionis" category="Pria" price="120.000" stock="20" img='https://s.blanja.com/picspace/970/122826/2000.1948_d4b873a1894a442c888b4556296f9aa8.jpg'/>
                    <ContentComp name="Celana Jeans" category="Pria" price="250.000" stock="20" img="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//97/MTA-3686533/leos_leos-straight-fit-celana-jeans-pria---blue_full08.jpg" />
                    <ContentComp name="Celana Jogger" category="Pria" price="550.000" stock="20" img="https://cdn.shopify.com/s/files/1/1632/7791/products/119187_black_530x.jpg" />
                    <ContentComp name="Celana Sobek" category="Pria" price="550.000" stock="20" img="https://id-test-11.slatic.net/p/00a9ec6bcfae5ba6d1a23de20ad664d8.jpg"/>
                    <ContentComp name="Celana Cargo" category="Pria" price="550.000" stock="20" img="https://mm-image-marketing.s3.amazonaws.com/jual/fashion/celana-cargo-warna-hijau-4468646.jpg" />
                </div>
                <a className="next" onClick={this.scrollpalingDicari.bind(null,1)}><FontAwesomeIcon icon={ faAngleRight } size="2x"  style={{ color: '#d1d1d1'}}/></a>
                </div>
            </Container>
            {/* Mush Search Component End */}

            {/* Footer Component */}
            {/* <Container className="footer" fluid style={{  backgroundColor:'#fafcfc', marginTop:'20px'}}>
                <FooterComp
                    facebook="https://facebook.com/kamilanindita"
                />
            </Container> */}
            {/* Footer Component End */}

            {/* <div>
                <HeaderComp />
            </div>
            <Route path="/" exact component={JumbotronComp} />
            <Route path="/produk" exact component={Product} />
            <div>
                <FooterComp />
            </div> */}
        {/* </BrowserRouter> */}
        </Fragment>
        )
    }
}
export default Home;

