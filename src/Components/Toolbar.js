import React from "react";
import { withRouter, Link } from "react-router-dom";

class Toolbar extends React.Component {
    hamburgerClicked = () => {
        let hamburger = document.getElementById("hamburger");
        let menuItems = document.getElementById("menuItems");

        hamburger.classList.toggle("is-active");
        menuItems.classList.toggle("show");
    };

    render() {
        return (
            <React.Fragment>
                <div className='Toolbar'>
                    <Link to='/' className='websiteTitle'>
                        XPLORA
                    </Link>
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
                <div className='menuItems' id='menuItems'>
                    <div
                        className='menuSensor'
                        onClick={() => {
                            this.hamburgerClicked();
                        }}></div>
                    <Link
                        to='/'
                        className='navLink'
                        onClick={() => {
                            this.hamburgerClicked();
                        }}>
                        Home
                    </Link>
                    <Link
                        to='/Gallery'
                        className='navLink'
                        onClick={() => {
                            this.hamburgerClicked();
                        }}>
                        Gallery
                    </Link>
                    <Link
                        to='/PictureOfTheDay'
                        className='navLink'
                        onClick={() => {
                            this.hamburgerClicked();
                        }}>
                        Picture of the Day
                    </Link>
                </div>
            </React.Fragment>
        );
    }
}
export default withRouter(Toolbar);