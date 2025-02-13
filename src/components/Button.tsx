import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = ({ text, link }) => {
  const navigate = useNavigate();

  return (
    <div 
      className='other-list' 
      style={{ cursor: 'pointer' }} 
      
    >
      <div className='other-wrapper'>
        <div className='other-link'>
          <b><a href={link}>{text}</a></b>
        </div>
      </div>
    </div>
  );
};

export default Button;
