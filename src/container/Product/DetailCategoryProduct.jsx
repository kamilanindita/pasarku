import React, { Component, Fragment } from 'react';
import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import ContentComp from '../../component/content/ContentComp'


class DetailCategoryProduct extends Component {
    constructor(){
        super()
        this.state = {
            user:'Anin',
            order:0,
            posts:[]
        }
      }


    render(){
        return(
        <Fragment>
                <Container style={{  backgroundColor:'#fafcfc', marginTop:'65px'}} >
                <h4>Nama Kategori</h4>
                <Row>
                    <ContentComp  name="Celana Cionis" category="Pria" price="120.000" stock="20" />
                    <ContentComp  name="Celana Jeans" category="Pria" price="250.000" stock="20" />
                    <ContentComp  name="Celana Levis" category="Pria" price="550.000" stock="20" />
                    <ContentComp  name="Celana Levis" category="Pria" price="550.000" stock="20" />
                    <ContentComp  name="Celana Levis" category="Pria" price="550.000" stock="20" />
                    <ContentComp  name="Celana Cionis" category="Pria" price="120.000" stock="20" />
                    <ContentComp  name="Celana Jeans" category="Pria" price="250.000" stock="20" />
                    <ContentComp  name="Celana Levis" category="Pria" price="550.000" stock="20" />
                    <ContentComp  name="Celana Levis" category="Pria" price="550.000" stock="20" />
                    <ContentComp  name="Celana Levis" category="Pria" price="550.000" stock="20" />
                </Row>
                </Container>
        </Fragment>)
    }

}

export default DetailCategoryProduct;
