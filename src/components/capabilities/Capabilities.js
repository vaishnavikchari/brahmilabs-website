import React from 'react';
import {Link} from 'gatsby';

import CapabilityList from './CapabilityList';

const Capabilities = () => (
  <section id="two" className="wrapper style3 fade-up">
    <div className="inner">
      <h2>What we do</h2>
      <p>
        We are a digital development agency. We work with businesses to build their web presence and automate their day to day functions. We consult on digital strategy, web design and development, digital assistants and business process automation.
      </p>
      <div className="features">
        <CapabilityList />
      </div>
    </div>
  </section>
);

export default Capabilities;
