import React from 'react';
import {Alert} from 'react-bootstrap';

const Message = ({children}) => {
  return (
    <Alert
      style={{
        color: '#5052b5',
        opacity: '0.8',
        fontWeight: '600',
        borderRadius: '3px',
        backgroundColor: 'white',
        textAlign: 'center',
        margin: '10px',
      }}
    >
      {children}
    </Alert>
  );
};

export default Message;
