import React from 'react';
import Scroll from '../common/Scroll';

const Introduction = () => (
  <section id="intro" className="wrapper style1 fullscreen fade-up">
    <div className="inner">
      <h1>Brahmilabs</h1>
      <h3>Digital agency</h3>
      <br />
      <p>
        We help small and medium businesses redefine themselves in the digital world.
      </p>
      <ul className="actions">
        <li>
          <Scroll type="id" element="one">
            <a href="#one" className="button">
              Learn more
            </a>
          </Scroll>
        </li>
      </ul>
    </div>
  </section>
);

export default Introduction;
