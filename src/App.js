import React from "react";
import Layout from "./Containers/Layout";
import Home from "./Containers/Home";
import "./App.css";

class App extends React.Component {
    render() {
        return (
            <Layout>
                <div className='buffer'>Buffer</div>
                <Home />
            </Layout>
        );
    }
}
export default App;
