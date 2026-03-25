import React from 'react';

const SectionHeader = ({ iconName, title }) => {
  return (
    <div className='section-header'>
      <ion-icon name={iconName}></ion-icon>
      <h2><strong>{title}</strong></h2>
    </div>
  );
};

export default SectionHeader;

