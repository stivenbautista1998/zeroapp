import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import Features from '../Features';
import Support from '../Support';
import BoxContent from '../BoxContent/Loadable'; /* problem with Loadable in future versions */
import NotFoundPage from '../NotFoundPage';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './style.css';

const App = () => (
  <Fragment>
    <Helmet
      titleTemplate="React Boilerplate"
      defaultTitle="ReactJS Boilerplate App"
    >
      <meta name="description" content="A Home of boilerplate react" />
    </Helmet>

    <div className="app">
      <div className="app-content">
        <Header />
        
        <Switch>
          <Route exact path="/" component={BoxContent} />
          <Route path="/features" component={Features} />
          <Route path="/support" component={Support} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </div>

      <Footer />
    </div>
  </Fragment>
);


export default App;
