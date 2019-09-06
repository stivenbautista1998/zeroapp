import React from 'react';
import { Helmet } from 'react-helmet';
import './style.css';

export default function Feactures({ children }) {
  return (
    <section className="section section-feactures">
      <Helmet>
        <title>Boilerplate Feactures</title>
        <meta
          name="description"
          content="This section shows the different characteristics of the boilerplate react"
        />
      </Helmet>

      <div className="wrapper">
        <h1 className="section-feactures__title">Boilerplate Feactures</h1>
        <div className="section-feactures__content">
            {children}            
        </div>
      </div>
    </section>
  );
}