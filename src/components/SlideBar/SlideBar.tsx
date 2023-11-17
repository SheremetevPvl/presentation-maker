import { PageInfo } from '../../Types and examples';
import Render from '../Render/Render';
import './SlideBar.css';

type SlideBarProps = {
    slides: PageInfo[];
    selectSlides: PageInfo[];
  };

const SlideBar = ({ selectSlides, slides }: SlideBarProps) => {
    return (
      <div className='SlideBar'>
        {
         slides.map((slide) => (
          <div key={slide.id}>
            <Render selected={selectSlides.includes(slide)} slide={slide.slide}/>
          </div>
         ))
        }
      </div>
    )
  }

export default SlideBar