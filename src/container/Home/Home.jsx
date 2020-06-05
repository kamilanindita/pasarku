import React, { Component, Fragment } from 'react';
import { Container ,Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../component/content/ContentComp.css'

import HeaderComp from '../../component/header/HeaderComp'
import JumbotronComp from '../../component/jumbotron/JumbotronComp'
import CategoryComp from '../../component/category/CategoryComp'
import ContentComp from '../../component/content/ContentComp'
import FooterComp from '../../component/footer/FooterComp'

import { faAngleLeft, faAngleRight  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import $ from 'jquery';
//import axios from 'axios';

class Home extends Component {
    constructor(){
        super()
        this.state = {
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
            {/* Header Component */}
            <Container fluid>
                <HeaderComp/>
            </Container>
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
            <buttom className="prev" onClick={this.scrollKategori.bind(null,-1)}><FontAwesomeIcon icon={ faAngleLeft } size="2x"  style={{ color: '#d1d1d1'}}/></buttom>
            <div className="scrolling-wrapper row flex-row flex-nowrap" id="katagori-container">
                <CategoryComp name="Fasion Pria"/>
                <CategoryComp name="Fasion Wanita"/>
                <CategoryComp name="Tas"/>
                <CategoryComp name="Pertanian"/>
                <CategoryComp/>
                <CategoryComp/>
                <CategoryComp/>
            </div>
            <buttom className="next" onClick={this.scrollKategori.bind(null,1)}><FontAwesomeIcon icon={ faAngleRight } size="2x"  style={{ color: '#d1d1d1'}}/></buttom>
            </div>
            </Container>
            {/* Category Component End */}

            {/* Mush Search Component */}
            <Container style={{  backgroundColor:'#fafcfc', marginTop:'20px'}} className="container-content">
                <h4>Paling Dicari</h4>
                <div className="container-content" >
                <a className="prev" onClick={this.scrollpalingDicari.bind(null,-1)}><FontAwesomeIcon icon={ faAngleLeft } size="2x"  style={{ color: '#d1d1d1'}}/></a>
                <div className="scrolling-wrapper row flex-row flex-nowrap" id="palingDicari-container">
                    <ContentComp name="Celana Cionis" category="Pria" price="Rp.120.000" stock="20" />
                    <ContentComp />
                    <ContentComp />
                    <ContentComp />
                    <ContentComp />
                    <ContentComp />
                </div>
                <a className="next" onClick={this.scrollpalingDicari.bind(null,1)}><FontAwesomeIcon icon={ faAngleRight } size="2x"  style={{ color: '#d1d1d1'}}/></a>
                </div>
            </Container>
            {/* Mush Search Component End */}

            {/* Footer Component */}
            <Container className="footer" fluid style={{  backgroundColor:'#fafcfc', marginTop:'20px'}}>
                <FooterComp
                    facebook="https://facebook.com/kamilanindita"
                />
            </Container>
            {/* Footer Component End */}
        </Fragment>
        )
    }
}
export default Home;

