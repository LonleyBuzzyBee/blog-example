import React from 'react';
import { Button } from 'reactstrap';
import Axios from 'axios';
import { useState, useEffect } from 'react';

const Articles_section = ({item}) => {


  return (
    <div className='articles-section'>
      <div className='articles-section-header'>
        <ion-icon name="information-circle-outline"></ion-icon>
        <h2><strong>Podcasts:</strong></h2>
      
      </div>
      <div className='articles-section-list'>
        {podcasts.map((podcast) => {
          return (
            <Card_article item={podcast} />
          )
        })}
      </div>
      <div className='section-bottom'>
        
      </div>
    </div>
  );
};
export default Articles_section;