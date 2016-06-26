/* eslint global-require: 0*/
// Add css styles
import './styles.sass';

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import RootComponent from './app.component';


// HTML Element where the app will be mounted.
const $mountPoint = document.getElementById('app');

// Render initial application.
render(
  <AppContainer>
    <RootComponent />
  </AppContainer>,
  $mountPoint
);


/*
 ****************************
 **  HOT RELOADING CONFIG  **
 ****************************
 */
// If you rename or delete the 'app.component.jsx' file,
// make sure to change the strings below, otherwise you
// won't get the cool hot-reload ;).
if (module.hot) {
  module.hot.accept('./app.component', () => {
    const NextApp = require('./app.component').default;

    render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      $mountPoint
    );
  });
}
