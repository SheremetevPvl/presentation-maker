import { PageInfo } from '../../Types and examples';
import Render from '../Render/Render';
import './SlideBar.css';

type SlideBarProps = {
    slides: PageInfo[];
    //selectSlides: PageInfo[];
  };

const SlideBar = ( props : SlideBarProps) => {
    return (
      <div className='SlideBar'>
        {
         props.slides.map((slide) => (
          <div key={slide.id}>
            <Render selected={slide.selected} slide={slide.slide} id={slide.id}/>
            {/* <Render selected={selectSlides.includes(slide)} slide={slide.slide} id={slide.id}/> */}
          </div>
         ))
        }
      </div>
    )
  }

export default SlideBar