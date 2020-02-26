import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import FormLogin from './Login/FormLogin';

// function HelloWorld ()
// {
//     return <p> Ini Adalah Function Component </p>
// }

// const HelloWorld = () => {
//     return <p> Ini adalah Arrow Function </p>
// }

// class StatefullComponent extends React.Component
// {
//     render() {
//         return <p> Ini Adalah Statefull Component </p>
//     }
// }
ReactDOM.render(<FormLogin />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();