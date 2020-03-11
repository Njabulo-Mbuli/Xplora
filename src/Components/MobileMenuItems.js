import React from 'react'
import { withRouter, Link } from "react-router-dom";

const MobileMenuItems = () =>{
    const hamburgerClicked = () => {
        let hamburger = document.getElementById("hamburger");
        let mobileMenuItems = document.getElementById("mobileMenuItems");
        let websiteTitle = document.getElementById("websiteTitle");

        websiteTitle.classList.toggle("ToolbarChange")
        hamburger.classList.toggle("is-active");
        mobileMenuItems.classList.toggle("show");
    };
    return (
        <div className='mobileMenuItems' id='mobileMenuItems'>
                    <div
                        className='menuSensor'
                        onClick={() => {
                            hamburgerClicked();
                        }}></div>
                    <Link
                        to='/'
                        className='navLink'
                        onClick={() => {
                            hamburgerClicked();
                        }}>
                        Home
                    </Link>
                    <Link
                        to='/SpaceXLaunches'
                        className='navLink'
                        onClick={() => {
                            hamburgerClicked();
                        }}>
                        Space-X Launches
                    </Link>
                    <Link
                        to='/PictureOfTheDay'
                        className='navLink'
                        onClick={() => {
                            hamburgerClicked();
                        }}>
                        Picture of the Day
                    </Link>
                </div>
    )
}

export default withRouter(MobileMenuItems)