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
// make sure to change the constant below or you
// won't get the cool hot-reload ;).
const ROOT_COMPONENT_FILE = './app.component';

// Enable hot reload on development server
if (module.hot) {
  module.hot.accept(ROOT_COMPONENT_FILE, () => {
    const NextApp = require(ROOT_COMPONENT_FILE).default;

    render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      $mountPoint
    );
  });
}
