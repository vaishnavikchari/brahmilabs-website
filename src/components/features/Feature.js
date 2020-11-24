import React from 'react';
import {Link} from 'gatsby';
import Scroll from '../common/Scroll';
//</a>
const Feature = ({href, image, heading, description, to}) => (
  <section>
    <a href={href} className="image" alt="Brahmilabs - Digital Agency">
      <img
        src={image}
        alt="Brahmilabs - Digital Agency"
        data-position="center center"
        loading="lazy"
        title="Brahmilabs - What we do"
      />
    </a>
    <div className="content">
      <div className="inner">
        <h2>{heading}</h2>
        <p>{description}</p>
        <ul className="actions">
          <li>
            <Scroll type="id" element="four">
              <Link className="button" to={to.href}>
                {to.label}
              </Link>
            </Scroll>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Feature;
