import React from 'react';

import Capability from './Capability';

const CapabilityList = () => {
  const CAPABILITIES = [
    {
      heading: 'Web design & development',
      description: 'Web design and development solutions that ensure usability, functionality, and visualization to create a unique digital experience for your target audience',
      iconClass: 'fa-code',
    },
    {
      heading: 'Business Automation',
      description: 'Business automation solution using software and tools designed for ambitious brands, that help you take your venture to the next level',
      iconClass: 'fa-cog',
    },
    {
      heading: 'Digital Virtual Assistants',
      description: 'Conversational AI Chatbots that chat with your customers to help them understand your business, support your customers in making their best choices, and help with resolutions to their common problems',
      iconClass: 'fa-comment',
    },
    {
      heading: 'Cloud and web apps',
      description: 'Light-weight solutions with custom built apps and/or open-source software implementation to meet your business goals',
      iconClass: 'fa-desktop',
    },
  ]

  const [capabilities] = React.useState(CAPABILITIES);

  return (
    <>
      {capabilities.map((capability) => <Capability key={capability.heading} {...capability} />)}
    </>
  )
}

export default CapabilityList;
