import React from 'react';

const Member = ({name, role, image, description, profile}) => (
  <section>
    <img
      src={image}
      alt="Brahmilabs - Who we are"
      data-position="center center"
      loading="lazy"
      title="Brahmilabs - Who we are"
    />
    <h3>
      {name}
      <a href={profile} target="_blank" rel="noreferrer">
        <i
          style={{
            color: 'black',
            backgroundColor: 'white',
            borderRadius: '2px',
            paddingLeft: '2px',
            paddingRight: '2px',
            marginLeft: '5px',
          }}
          class="fa fa-linkedin"
        />
      </a>
    </h3>
    <b> {role} </b>
    <p><i>{description}</i></p>
  </section>
);

export default Member;
