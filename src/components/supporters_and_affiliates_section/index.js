import React from 'react';
import SectionHeader from '../section_header';
import Supporters_card from './supporters_card';


const Supporters_and_affiliates = ({ supporters = [] }) => {
  
  return (
    <div className='supporters_and_affiliates_section'>
      <div className='supporters_and_affiliates_section_top'>
        <SectionHeader iconName="heart-circle-outline" title="Supporters and affiliates" />
      </div>
      <div className='supporters_and_affiliates_section_bottom'>
        {supporters.map((supporter) => {
          return (
            <Supporters_card key={supporter.id} supporter={supporter}/>
          )
        })}
      </div>
    </div>
  );
};
export default Supporters_and_affiliates;