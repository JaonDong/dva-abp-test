import React from 'react';
import { Router, Route,IndexRedirect } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Dashboard from './routes/Dashboard';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} >
        <IndexRedirect to="/dashboard" />
         <Route path="dashboard" component={ Dashboard }/>
      </Route>
    </Router>
  );
}

export default RouterConfig;
