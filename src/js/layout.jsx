import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from './component/functional/scrollToTop.jsx';

import Home from './views/home.jsx';
import {Product} from './views/product.jsx';
import {Blog} from './views/blog.jsx';
import {Post} from './views/post.jsx';
import {Checkout} from './views/checkout.jsx';
import Login from './views/login.jsx';
import Demo from './views/demo.jsx';
import {UserInfo} from './views/userInfo.jsx';
import {Single} from './views/single.jsx';
import Store from './store/appContext.jsx';
import Navbar from './views/navbar.jsx';
import Footer from "./views/footer.jsx";

//create your first component
export class Layout extends React.Component{
    
    render(){
        return (
            <BrowserRouter>
                <ScrollToTop>
                    
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/product" component={Product} />
                        <Route path="/blog" component={Blog} />
                        <Route path="/post/:theid" component={Post} />
                        <Route path="/checkout" component={Checkout} />
                        <Route path="/login" component={Login} />
                        <Route path="/userinfo" component={UserInfo} />
                        <Route path="/demo" component={Demo} />
                        <Route path="/single/:theid" component={Single} />
                        <Route render={() => <h1>Not found!</h1>} />
                    </Switch>
                    <Footer />
                    
                </ScrollToTop>
            </BrowserRouter>
        );
    }
}

export default Store(Layout);
