import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import HeaderComp from './component/header/HeaderComp'
import Home from './container/Home/Home'
import Profile from './container/Profile/Profile'
import Product from './container/Product/Product'
import DetailCategoryProduct from './container/Product/DetailCategoryProduct'
import FooterComp from './component/footer/FooterComp'


class App extends Component {
  render(){
    return(
          <BrowserRouter>
            <Fragment>
            <div>
                <HeaderComp />
            </div>

            <Route path="/" exact component={ Home } />
            <Route path="/profil" exact component={ Profile } />
            <Route path="/produk" exact component={ Product } />
            <Route path="/produk/kategori" component={ DetailCategoryProduct} />

            <div>
                <FooterComp />
            </div>
            </Fragment>
          </BrowserRouter>
          )
  }
}

export default App;
