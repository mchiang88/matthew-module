import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import Footer from './components/Footer';

render(<App section={'reviews'}/>, document.getElementById('reviews'));
render(<App section={'footer'}/>, document.getElementById('footer'))
