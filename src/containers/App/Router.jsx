import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import FollowOrder from 'containers/FollowOrder';

export default function Router() {
  return (
    <Switch>
      <Redirect exact from="/" to="/follow" />

      <Route exact path="/follow" render={() => <FollowOrder />} />
    </Switch>
  );
}
