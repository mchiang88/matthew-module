import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import Footer from './components/Footer';

render(<App />, document.getElementById('reviews'));
render(<Footer />, document.getElementById('footer'))
