import React from "react";

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
                    <h4 className='websiteTitle'>XPLORA</h4>
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
                <div
                    className='menuItems'
                    id='menuItems'>
                    <div className="menuSensor" onClick={() => {
                        this.hamburgerClicked();
                    }}></div>
                    <h4
                        className='navLink'
                        onClick={() => {
                            this.hamburgerClicked();
                        }}>
                        Home
                    </h4>
                    <h4
                        className='navLink'
                        onClick={() => {
                            this.hamburgerClicked();
                        }}>
                        Gallery
                    </h4>
                    <h4
                        className='navLink'
                        onClick={() => {
                            this.hamburgerClicked();
                        }}>
                        Picture of the Day
                    </h4>
                    <h4
                        className='navLink'
                        onClick={() => {
                            this.hamburgerClicked();
                        }}>
                        Weather on Mars
                    </h4>
                </div>
            </React.Fragment>
        );
    }
}
export default Toolbar;