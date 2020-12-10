import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import {Global, css} from '@emotion/react';
import pic from "./pics/OLD-BeaverHawksLogo.png"


const globalStyles = css`
  body {
    	margin: 0px;
      background-image:url(${pic});
      background-repeat: no-repeat;
    	background-attachment: fixed;
      background-position: center;
    	background-size: contain;
  }

  .pageTitle{
    text-align: center;
  }

`;

ReactDOM.render(
  <BrowserRouter>
    <Global styles={globalStyles} />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
