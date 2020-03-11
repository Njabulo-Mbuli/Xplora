import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Layout from "./Containers/Layout";
import Home from "./Containers/Home";
import PictureDay from "./Containers/PictureDay";
import Gallery from "./Containers/Gallery";
import "./App.css";

class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <Layout>
                    <div className='buffer'>Buffer</div>

                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/PictureOfTheDay' component={PictureDay} />
                        <Route path='/Gallery' component={Gallery} />
                    </Switch>
                </Layout>
            </HashRouter>
        );
    }
}
export default App;