import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/header';
import Content from '../components/content';
import Footer from '../components/footer';

document.addEventListener("DOMContentLoaded",function () {
    class App extends React.Component{
        render() {
            return(
                <>
                <Header/>
                <Content/>
                <Footer/>
                </>
            )
         };
    };

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    )
});