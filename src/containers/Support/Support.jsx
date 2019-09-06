import React from 'react';
import { Helmet } from 'react-helmet';

export default ({ children }) => (
  <section className="section section-support">
    <Helmet>
      <title>Boilerplate Support</title>
      <meta
        name="description"
        content="In this section the support of different browsers is shown."
      />
    </Helmet>

    <div className="wrapper">
      <h1 className="section-support__title">Navigator supports</h1>
      <div className="section-support__content">
        {children}
      </div>
    </div>
  </section>
);