import React from 'react';
import Scrollspy from 'react-scrollspy';

import Tab from './Tab';

const Sidebar = () => {
  const [tabs] = React.useState ([
    {content: 'Home', href: 'intro'},
    {content: 'Our specialties', href: 'one'},
    {content: 'Our services', href: 'two'},
    {content: 'About us', href: 'three'},
    {content: 'Get in touch', href: 'four'},
  ]);

  return (
    <section id="sidebar">
      <div className="inner">
        <nav>
          <Scrollspy
            items={tabs.map (s => s.href)}
            currentClassName="active"
            offset={-300}
          >
            {tabs.map (tab => <Tab key={tab.href} {...tab} />)}
          </Scrollspy>
        </nav>
      </div>
    </section>
  );
};

export default Sidebar;
