import test from 'ava';
import React from 'react';
import { spy } from 'sinon';
import { mount, shallow } from 'enzyme';

import App from '../../client/app.component';


test('App should use componentDidMount', t => {
  spy(App.prototype, 'componentDidMount');
  mount(<App />);

  t.true(App.prototype.componentDidMount.calledOnce, 'componentDidMount should be used');
  App.prototype.componentDidMount.restore();
});


test('App should include "Hello world" header', t => {
  const component = shallow(<App />);

  const h1Text = component.find('h1').first().text();

  t.is(h1Text.trim(), 'Hello world', 'H1 inside <App/> should include the "Hello world" text');
});
