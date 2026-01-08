import React from 'react';
import Supporters_card from './supporters_card';
import {supporters} from '../../models/supporters';
import Axios from 'axios';
import { useState, useEffect } from 'react';


const Supporters_and_affiliates = () => {
  
  return (
    <div className='supporters_and_affiliates_section'>
      <div className='supporters_and_affiliates_section_top'>
        <ion-icon name="heart-circle-outline"></ion-icon>
        <h2><strong>Supporters and affiliates</strong></h2>
      </div>
      <div className='supporters_and_affiliates_section_bottom'>
        {supporters.map((supporter) => {
          return (
            <Supporters_card supporter={supporter}/>
          )
        })}
      </div>
    </div>
  );
};
export default Supporters_and_affiliates;