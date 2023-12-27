import {TextBlock, Primitiv, ImageBlock, Doc} from '../../Types and examples';
import Textblock from '../TextBlock/TextBlock';
import PrimitivObg from '../Primitiv/Primitiv';
import Image from '../Image/Image';
import styles from '../Slide/Slide.module.css';

type props= {
    doc: Doc,
    curr: string
}


function ShowSlide(props: props) {
    const Slides = props.doc.pages

    const itemWithId = Slides.find(item => item.id === props.curr);
    if (itemWithId){
    const element: Array<TextBlock | Primitiv | ImageBlock> = itemWithId.slide
    const decrease: number = 1;
    return (
        <div className={styles.Slide}>
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
    )}
    else {
        return (
        <div className={styles.Slide}>

        </div>)
    }
}

export default ShowSlide