import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Header from './layout/Header';
import Dashboard from './categories/Dashboard';
import Form from './categories/Form';
import EditCategory from './categories/EditCategory';
import EditProfile from './categories/EditProfile';
import AddWord from './categories/AddWord';
import categories from './categories/Categories';
import Lessons from './categories/Lessons';
import TakeLesson from './categories/TakeLesson';
import Result from './categories/Result';
import profiles from './categories/Profiles';
import ViewProfile from './categories/ViewProfile';
import ViewCategory from './categories/ViewCategory';
import EditQuestion from './categories/EditQuestion';
import Alerts from './layout/Alerts';
import Login from './accounts/Login';
import Register from './accounts/Register';
import PrivateRoute from './common/PrivateRoute';
import AdminRoute from './common/AdminRoute';

import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth';

// Alert Options
const alertOptions = {
  timeout: 3000,
  position: 'top center',
};

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <Header />
              <Alerts />
              <div className="container">
                <Switch>
                  <PrivateRoute exact path="/" component={Dashboard} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                  <AdminRoute exact path="/form" component={Form} />
                  <AdminRoute exact path="/addquestion/:id" component={AddWord} />
                  <PrivateRoute exact path="/userlist" component={profiles} />
                  <PrivateRoute exact path="/viewprofile/:id" component={ViewProfile} />
                  <AdminRoute exact path="/categories" component={categories} />
                  <PrivateRoute exact path="/lessons" component={Lessons} />
                  <PrivateRoute exact path="/takelesson/:id" component={TakeLesson} />
                  <AdminRoute exact path="/editcategory/:id" component={EditCategory} />
                  <AdminRoute exact path="/editquestion/:id" component={EditQuestion} />
                  <AdminRoute exact path="/viewcategory/:id" component={ViewCategory} />
                  <PrivateRoute exact path="/editprofile/:id" component={EditProfile} />
                  <PrivateRoute exact path="/results/:id" component={Result} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
