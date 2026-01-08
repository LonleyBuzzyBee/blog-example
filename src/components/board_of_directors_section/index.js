import React from 'react';
import Axios from 'axios';
import { useState, useEffect } from 'react';

import Owl_slider from './Owl_Slider';


const Board_of_directors = ()  => {
  
  return (
    <div className='board_of_directors_section'>
      <div className='board_of_directors_section_top'>
       
        <ion-icon name="people-circle-outline"></ion-icon>
        <h2><strong>Our board of directors</strong></h2>
      </div>
      <div className='board_of_directors_section_bottom'>
        <Owl_slider/>
      </div>

    </div>
  );
};
export default Board_of_directors;