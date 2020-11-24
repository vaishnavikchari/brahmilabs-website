import React from 'react';
//import {Link} from 'gatsby';

import MemberList from './MemberList';

const Team = () => (
  <section id="three" className="wrapper style2 fade-up">
    <div className="inner">
      <h2>Who we are</h2>
      <p>
        We are a small team of passionate business and technology experts. We work at the intersection of business, technology and products. We work along with our clients or their teams to build products or productized services, and set them up for success in their technology endeavours.
      </p>
      <div className="team">
        <MemberList />
      </div>
    </div>
  </section>
);

export default Team;
