import '../../Types and examples';
import SlideBar from '../SlideBar/SlideBar';
import { doc } from '../../Maximal data collection';
import WorkArea from '../Slide/Slide';
import './PagesView.css';


//продумать хранение текущего слайда(лучше в модели) хранить id слайдов лучше не в хуке
//добавить состояние выделения для слайдов и объектов
function PagesView() {
    return ( 
        <div className='SlidesDisplay'>
           <SlideBar slides={doc.pages}  selectSlides={doc.selectSlides}/>
           <WorkArea {...doc.current}/>
        </div>
    )
}

export default PagesView