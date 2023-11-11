import '../../Types and examples';
import SlideBar from '../SlideBar/SlideBar';
import { doc } from '../../Maximal data collection';
import WorkArea from '../Slide/Slide';
import { useState } from 'react';
import './PagesView.css';

function PagesView() {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    return ( 
        <div className='SlidesDisplay'>
           <SlideBar slides={doc.pages} activeSlideIndex={activeSlideIndex} setActiveSlideIndex={setActiveSlideIndex}/>
           <WorkArea {...doc.current}/>
        </div>
    )
}

export default PagesView