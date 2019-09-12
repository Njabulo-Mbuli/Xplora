import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./Containers/Layout";
import Home from "./Containers/Home";
import PictureDay from "./Containers/PictureDay";
import Gallery from "./Containers/Gallery";
import NewsOfTheDay from "./Containers/NewsOfTheDay";
import WeatherOnMars from "./Containers/WeatherOnMars";
import "./App.css";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <div className='buffer'>Buffer</div>

                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/PictureOfTheDay' component={PictureDay} />
                        <Route path='/Gallery' component={Gallery} />
                        <Route path='/WeatherOnMars' component={WeatherOnMars}/>
                        <Route path='/NewsOfTheDay' component={NewsOfTheDay}/>
                    </Switch>
                </Layout>
            </BrowserRouter>
        );
    }
}
export default App;
