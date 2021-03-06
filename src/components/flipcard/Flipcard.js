import React, { useState } from 'react';
import Swal from 'sweetalert2';

export const Flipcard = (content) => {
  const { icon, id, value } = content;

  const sizedIcon = icon + ' fa-7x';
  const [newValue, setNewValue] = useState(value);

  const handleButton = () => {
    if (typeof value === 'number') {
      setNewValue(value);
      Swal.fire({
        icon: 'info',
        title: id,
        text: '+' + newValue,
      });
    } else {
      setNewValue(newValue);
      Swal.fire({
        icon: 'info',
        title: id,
        html: newValue,
      });
    }
  };

  return (
    <div className='flip-card__main'>
      <div className='flip-card__inner'>
        <div className='flip-card__front'>
          <i className={sizedIcon}></i>
        </div>
        <div className='flip-card__back'>
          <input type='submit' value='Click to show' onClick={handleButton} />
        </div>
      </div>
    </div>
  );
};
