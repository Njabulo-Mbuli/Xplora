import React from "react";
import MobileMenuItems from './MobileMenuItems'
import DesktopMenuItems from './DesktopMenuItems'
import { withRouter, Link } from "react-router-dom";

class Toolbar extends React.Component {
   
    hamburgerClicked = () => {
        let hamburger = document.getElementById("hamburger");
        let mobileMenuItems = document.getElementById("mobileMenuItems");
        let websiteTitle = document.getElementById("websiteTitle");

        websiteTitle.classList.toggle("ToolbarChange")
        hamburger.classList.toggle("is-active");
        mobileMenuItems.classList.toggle("show");
    };

    render() {

        return (
            <React.Fragment>
                <div className='Toolbar'>
                    <Link to='/' className='websiteTitle' id="websiteTitle">
                        XPLORA
                    </Link>
                    <DesktopMenuItems/>
                    <div
                        className='hamburger hamburger--boring'
                        id='hamburger'
                        onClick={() => {
                            this.hamburgerClicked();
                        }}>
                        <div className='hamburger-box'>
                            <div className='hamburger-inner'></div>
                        </div>
                    </div>
                </div>
                <MobileMenuItems />
            </React.Fragment>
        );
    }
}
export default withRouter(Toolbar);