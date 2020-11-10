import React from 'react';

import pic1 from '../../images/pic01.jpg';
import pic2 from '../../images/pic02.jpg';
import pic3 from '../../images/pic03.jpg';

import Feature from './Feature';

const Features = () => {
  const FEATURES = [
    {
      image: pic1,
      heading: 'Ecommerce',
      description: 'eCommerce solutions for  product-centric businesses to reach their audience digitally. Our solutions are scalable and mobile-friendly, besides being packaged with an amazing user experience',
      to: {
        href: '#two',
        label: 'Learn more',
      },
    },
    {
      image: pic2,
      heading: 'Business Automation',
      description: 'Cost-effective, yet hightly productive solution to automate your day to day business processes. Solutions to transform the way you operate, allowing you to do more with less and scale',
      to: {
        href: '#two',
        label: 'Learn more',
      },
    },
    {
      image: pic3,
      heading: 'Conversational AI',
      description: 'Digital virtual assistants that converse with your customers to serve as your brand ambassador for routine support and customer service functions',
      to: {
        href: '#two',
        label: 'Learn more',
      },
    },
  ];

  const [features] = React.useState (FEATURES);

  return (
    <section id="one" className="wrapper style2 spotlights">
      {features.map (feature => <Feature key={feature.heading} {...feature} />)}
    </section>
  );
};

export default Features;
