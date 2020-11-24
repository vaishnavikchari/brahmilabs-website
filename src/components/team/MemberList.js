import React from 'react';
import pic1 from '../../images/vaishnavi.png';
import pic2 from '../../images/priya.png';
import pic3 from '../../images/varada.png';

import Member from './Member';

const MemberList = () => {
  const MEMBERS = [
    {
      name: 'Vaishnavi',
      role: 'Product Consultant',
      description: 'Concept, Design and Development',
      image: pic1,
      profile: 'http://www.linkedin.com/in/vaishnavikrishnamachari',
    },
    {
      name: 'Priya',
      role: 'Business Advisor',
      description: 'Finance, Fintech, Business Automation',
      image: pic2,
      profile: 'https://www.linkedin.com/in/priyadarshini-krishnamachari-abb20356',
    },
    {
      name: 'Varada',
      role: 'Technology Mentor',
      description: 'Architecture, Performance, Scalability',
      image: pic3,
      profile: 'https://www.linkedin.com/in/varadarajan-lakshmipuram-63099312',
    },
  ];

  const [members] = React.useState (MEMBERS);

  return (
    <>
      {members.map (member => <Member key={member.name} {...member} />)}
    </>
  );
};

export default MemberList;
