import React from "react";
import Layout from "./Containers/Layout";
import Home from "./Containers/Home";
import PictureDay from "./Containers/PictureDay";
import "./App.css";

class App extends React.Component {
    render() {
        return (
            <Layout>
                <div className='buffer'>Buffer</div>
                <Home />
                <PictureDay/>
            </Layout>
        );
    }
}
export default App;
