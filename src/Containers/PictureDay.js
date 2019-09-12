import React from "react";

class PictureDay extends React.Component {
    state = {
        title: null,
        copyright: null,
        date: null,
        hdurl: null,
        explanation: null
    };
    componentWillMount() {
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
        return (
            <div className="podBigContainer">
                <div className="podTitleSection">
                <h1 className='podTitle'>{this.state.title}</h1>
                <section className="podSubTitle">
                    <h3>{this.state.copyright}</h3>
                    <h3>{this.state.date}</h3>
                </section>
                </div>
                <div className='podContainer'>
                    <img className='podPicture' src={`${this.state.hdurl}`} />
                </div>
                <p className="podExplanation">{this.state.explanation}</p>
            </div>
        );
    }
}

export default PictureDay;
