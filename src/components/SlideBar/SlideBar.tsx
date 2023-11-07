import '../../Types and examples'
import { PageInfo } from '../../Types and examples';
import Render from '../Render/Render';



type SlideBarProps = {
    slides: PageInfo[];
    activeSlideIndex: number;
    setActiveSlideIndex: (i: number) => void;
  };

const SlideBar = (props: SlideBarProps) => {
    return (
      <div>
        {
         props.slides.map((slideInfo) => (
          <div>
            <Render selected={slideInfo.selected} slide={slideInfo.slide}/>
          </div>
         ))
        }
      </div>
    )
  }

export default SlideBar