import React from 'react';
import ReactDOM from 'react-dom';
import './assets/main.css';
import App from './components/App.jsx';

ReactDOM.render(<App />, document.getElementById('root'));



const rules =  [ 'AND',                                                      ic.    [ '==', '$State', 'Alabama' ],
[ '==', '$Profession', 'Software development' ] ],
[ 'AND', [ '==', '$State', 'Texas' ] ],
[ 'OR', [ '>=', '$NumberOfEmployees', 5 ] ] ]