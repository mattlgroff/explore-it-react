import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Import miscellaneous routes and other requirements
import App from './components/app';
import NotFoundPage from './components/pages/not-found-page';

// Import static pages
import HomePage from './components/pages/home-page';
import ExploreIt from './components/pages/map-page';

// Import authentication related pages
import Register from './components/auth/register';
import Login from './components/auth/login';
import Logout from './components/auth/logout';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} name="Explore It"/>
    <Route path="register" component={Register} name="Register - Explore It"/>
    <Route path="login" component={Login} name="Login - Explore It"/>
    <Route path="logout" component={Logout}/>

    <Route 
      path="belmont" 
      component={ExploreIt} 
      lat={32.770844} 
      long={-117.2527572} 
      zoom={18} 
      name={'Belmont Park'} 
      location={'Belmont'} />

      <Route 
      path="grossmont" 
      component={ExploreIt} 
      lat={32.8159026} 
      long={-117.0076561} 
      zoom={18} 
      name={'Grossmont College'} 
      location={'Grossmont'} />

    <Route path="*" component={NotFoundPage} name="Page Not Found - Explore It" />
  </Route>
);