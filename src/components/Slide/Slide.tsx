import '../../Types and examples'
import { Page, TextBlock, Primitiv, ImageBlock, PageInfo } from '../../Types and examples';
import Textblock from '../TextBlock/TextBlock';
import PrimitivObg from '../Primitiv/Primitiv';
import Image from '../Image/Image';
import './Slide.css';



function ShowSlide(Slide: PageInfo) {
    const element: Array<TextBlock | Primitiv | ImageBlock> = Slide.slide
    return (
        // <div>
        //     {element.map((element) => (element.type === 'Image') &&
        //        <Image key = {element.id}  {...element}/>
        //     )}
        // </div>
        <div className='Slide'>
            {element.map((element) =>
            //    <Block key = {element.id} {...element}/>
            {
                if (element.type === "TextBlock") {
                    return <Textblock key={element.id} data={element} />;
                } else if (element.type === "Image") {
                    return <Image  data={element} />;
                }
                else if (element.type === "Primitiv") {
                    //return <PrimitivObg  {...data} />;
                    // обработка других типов данных
                }
                return null;
            })}
        </div>
    )
}

export default ShowSlide