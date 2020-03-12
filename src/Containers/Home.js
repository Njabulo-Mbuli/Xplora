import React, {useRef} from "react";
import Rocketman from "../Components/Rocketman"

const Home =()=>{
    const goToNasaApi = () => {
        window.open("https://api.nasa.gov/", "_blank");
    }
    const goToSpacexApi = () => {
        window.open("https://api.spacex.land/graphql/", "_blank");
    }
    const aboutRef = useRef()
    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

        return (
            <div className='Home'>
                <div className="outline">dfdf</div>
                <div className='poster'>
                    <div className="posterBox">
                        <h2>Are we alone?</h2>
                        <p className="posterText">
                            The vast expanse of space has captured the imaginations of many.
                            Looking out in the night sky leaves us with questions, which are
                            hard to answer. Not promising any answers but let's keep wondering...
                        </p>
                        <button className="websiteButton" onClick={()=>{scrollToRef(aboutRef)}}>
                            Learn More
                        </button>
                    </div>
                    <Rocketman/>
                </div>
                <section className='about' ref={aboutRef}>
                   <div className="apiDetails">
                       <h2>Space-X API</h2>
                       <p className="aboutText">
                           The Space-X api contains information on all kinds of things that they have worked on. Rockets
                           capsules, launches and much more that is readily available for consumption. We will be using it 
                           to take a look at their launches and I have opted to use their GraphQl endpoint.<br/><br/>Access to the api
                           is available to anyone who is interested in learning more about their missions and I believe
                           there are no limits to how often you can use the api.<br/><br/>Click on the link to their api docs if you
                           would like to learn more.
                       </p>
                       <button onClick={()=>{goToSpacexApi()}} className="websiteButton">Space-X API Docs</button>
                   </div>
        
                   <div className="apiDetails">
                       <h2>NASA API</h2>
                       <p className="aboutText">
                           Nasa offers a trove of data on space itself. There are images, videos, info on asteriods and so on.
                           <br/><br/>We will be using their picture of the day endpoint, which serves up a different picture that is space
                           related daily. The endpoint for this API are Rest only<br/><br/>Click on the link to their api docs if you
                           would like to learn more.
                       </p>
                       <button onClick={()=>{goToNasaApi()}} className="websiteButton">NASA API Docs</button>
                   </div>
                </section>
            </div>
        );
    
}

export default Home;
