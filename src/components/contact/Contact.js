import React from 'react';

import ContactForm from './ContactForm';
import ContactInformation from './ContactInformation';

const Contact = () => (
  <section id="three" className="wrapper style2 fade-up">
    <div className="inner">
      <h2>Get in touch</h2>
      <p>
        Call us, message us or write to us and we will get started.
      </p>
      <div className="split style2">
        <ContactForm />
        <ContactInformation />
      </div>
    </div>
  </section>
);

export default Contact;
