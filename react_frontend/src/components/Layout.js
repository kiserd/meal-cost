import React from 'react';
import Header from './Header';
// import Navigation from './Navigation';
const Layout = ({ children }) => {
    return (
    <React.Fragment>
        <Header />
        <div className="navigationWrapper">
            {/* <Navigation /> */}
            <h1 className='bg-slate-500'>upper stuff</h1>
            <main>{children}</main>
        </div>
    </React.Fragment>
    );
};
export default Layout;