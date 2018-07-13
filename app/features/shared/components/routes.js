import React from 'react';
import {Switch, Route} from 'react-router';

import NotFound from './notFound';
import {Poc} from '../../poc/components';

import {ROUTES} from '../constants';

export default () => (
  <Switch>
    <Route exact path={ROUTES.home.route} component={Poc} />
    <Route component={NotFound} />
  </Switch>
);
