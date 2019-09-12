import React from "react";
import poster from "../assets/images/sunrise.jpg";

class Home extends React.Component {
    goToNasaApi = () => {
        window.open("https://api.nasa.gov/api.html", "_blank");
    }

    render() {
        return (
            <div className='Home'>
                <div className='poster'>
                    <img className='posterImage' src={poster} alt="Poster"/>
                    <div className='overlay'></div>
                    <h3 className='posterTagline'>Explore the universe...</h3>
                </div>
                <section className='about'>
                    <p>
                        Xplora is an app that was created with the intention of
                        showcasing the valuable data that NASA has to offer.
                    </p>
                    <p>
                        With the use of the NASA API's, we can take a look at
                        the weather on Mars and a trove of pictures that where
                        taken by the Mars Rovers and satellites.
                    </p>
                    <p>
                        This is a small showcasing of the data that NASA has
                        made freely available to the public. The API's are
                        available on their website and you can take a look and
                        maybe find something I didn't ;).
                    </p>
                    <button
                        className='websiteButton'
                        onClick={() => {
                            this.goToNasaApi();
                        }}>
                        NASA APIs
                    </button>
                </section>
            </div>
        );
    }
}

export default Home;
