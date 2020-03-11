import React from "react";
import Loading from '../Components/Loading'

class PictureDay extends React.Component {
    state = {
        title: null,
        copyright: null,
        date: null,
        hdurl: null,
        explanation: null
    };
    UNSAFE_componentWillMount() {
        fetch("https://api.nasa.gov/planetary/apod?api_key=7iCr77AbwYexDHksHxvcl8RgawbNnpeX2JUv9NcL")
            .then(result => {
                return result.json();
            })
            .then(result => {
                this.setState(() => {
                    return {
                        title: result.title,
                        copyright: result.copyright,
                        date: result.date,
                        hdurl: result.hdurl,
                        explanation: result.explanation
                    };
                });
            });
    }
    render() {
        return (<>
            {this.state.title ? <div className="podBigContainer">
                <div className="podTitleSection">
                <h1 className='podTitle'>{this.state.title}</h1>
                <section className="podSubTitle">
                    {this.state.copyright ? <h3>{this.state.copyright}</h3> : null}
                    {this.state.date ? <h3>{this.state.date}</h3> : null}
                </section>
                </div>
                {this.state.hdurl ? <div className='podContainer'>
                    <img className='podPicture' src={`${this.state.hdurl}`} />
                </div>:null}
                <p className="podExplanation">{this.state.explanation}</p>
            </div>:<Loading/>}
        </>);
    }
}

export default PictureDay;