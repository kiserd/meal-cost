// library
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";

// components
import Layout from '../components/Layout'

// pages
import Home from './home';
import Read from './read';
import Create from './create';
import Ingredients from './ingredients';
import Meals from './meals';



const Webpages = () => {
    return(
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element= {<Home />} />
                    <Route exact path="/create" element= {<Create />} />
                    <Route exact path="/read" element= {<Read />} />
                    <Route exact path="/meals" element= {<Meals />} />
                    <Route exact path="/ingredients" element= {<Ingredients />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};
export default Webpages;
