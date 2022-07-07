import React from 'react';
import {
  BrowserRouter,
  Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Layout from '../components/Layout'
import Home from './home';
// import MyBooks from './mybooks';
// import Favorites from './favorites';
const Webpages = () => {
    return(
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element= {<Home />} />
                    {/* <Route path = "/mybooks" component = {MyBooks} /> */}
                    {/* <Route path = "/favorites" component = {Favorites} /> */}
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};
export default Webpages;
