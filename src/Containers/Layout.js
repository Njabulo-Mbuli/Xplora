import React from 'react';
import Toolbar from '../Components/Toolbar';
import Footer from '../Components/Footer';

function Layout(props){
return(
    <React.Fragment>
        <Toolbar/>
        {props.children}
        <Footer/>
    </React.Fragment>
    );
}
export default Layout;