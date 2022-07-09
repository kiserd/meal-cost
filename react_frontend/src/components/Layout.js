// library
import React from 'react';
// components
import Nav from './Nav';

const Layout = ({ children }) => {
    return (
    <div className="bg-custom-background min-h-screen">
        <Nav />
        <main>{children}</main>
    </div>
    );
};
export default Layout;