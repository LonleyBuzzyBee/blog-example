import React from 'react';
import SectionHeader from '../section_header';
import Owl_slider from './Owl_Slider';


const Board_of_directors = ({ members })  => {
  
  return (
    <div className='board_of_directors_section'>
      <div className='board_of_directors_section_top'>
        <SectionHeader iconName="people-circle-outline" title="Our board of directors" />
      </div>
      <div className='board_of_directors_section_bottom'>
        <Owl_slider members={members} />
      </div>

    </div>
  );
};
export default Board_of_directors;