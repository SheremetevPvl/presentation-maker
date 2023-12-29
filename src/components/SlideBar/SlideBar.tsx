import styles from '../SlideBar/SlideBar.module.css';
import { PageInfo, Doc } from '../../Types and examples';
import Render from '../Render/Render';
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
      <div className={styles.SlideBar}>
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