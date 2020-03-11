import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Layout from "./Containers/Layout";
import Home from "./Containers/Home";
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import PictureDay from "./Containers/PictureDay";
import SpaceXLaunches from "./Containers/SpaceXLaunches";
import "./App.css";

const client = new ApolloClient({
    uri: 'https://api.spacex.land/graphql/'
})

const App=()=>{
        return (
            <ApolloProvider client={client}>
            <HashRouter>
                <Layout>
                    <div className='buffer'>Buffer</div>

                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/PictureOfTheDay' component={PictureDay} />
                        <Route path='/SpaceXLaunches' component={SpaceXLaunches} />
                    </Switch>
                </Layout>
            </HashRouter>
            </ApolloProvider>
        );
}
export default App;