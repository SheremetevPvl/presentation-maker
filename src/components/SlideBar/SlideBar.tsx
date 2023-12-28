import { PageInfo, Doc } from '../../Types and examples';
import Render from '../Render/Render';
import './SlideBar.css';
import { useState, useEffect } from 'react';

type SlideBarProps = {
  slides: PageInfo[];
  action: (currId: string) => void; 
};

const SlideBar: React.FC<SlideBarProps> = (props) => {
  const handlePageInfoClick = (id: string) => {
    props.action(id);
  };

  
    return (
      <div className='SlideBar'>
        {
         props.slides.map((slide) => (
          <div key={slide.id} onClick={() => handlePageInfoClick(slide.id)}>
            <Render selected={slide.selected} slide={slide.slide} id={slide.id}/>
          </div>
         ))
        }
      </div>
    )
  }

export default SlideBar