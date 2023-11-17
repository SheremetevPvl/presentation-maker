import {TextBlock, Primitiv, ImageBlock, PageInfo } from '../../Types and examples';
import Textblock from '../TextBlock/TextBlock';
import PrimitivObg from '../Primitiv/Primitiv';
import Image from '../Image/Image';
import './Slide.css';



function ShowSlide(Slide: PageInfo) {
    const element: Array<TextBlock | Primitiv | ImageBlock> = Slide.slide
    const decrease: number = 1;
    return (
        <div className='Slide'>
            {element.map((element) =>
            {
                if (element.type === "TextBlock") {
                    return <Textblock key={element.id} data={element} decrease={decrease}/>;
                } else if (element.type === "Image") {
                    return <Image key={element.id} data={element} decrease={decrease}/>;
                }
                else if (element.type === "Primitiv") {
                    return <PrimitivObg key={element.id} data={element} decrease={decrease}/>;
                }
                return null;
            })}
        </div>
    )
}

export default ShowSlide