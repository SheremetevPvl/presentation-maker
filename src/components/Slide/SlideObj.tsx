import styles from '../Slide/Slide.module.css';
import { TextBlock, Primitiv, ImageBlock, Doc } from '../../Types and examples';
import ShowBlock from "../Block/Block";
import { RegisterDndItemFn } from '../hooks/DragAndDrop/DnDSlide';

type props = {
    doc: Doc,
    curr: string | null,
    isWorkSpace: boolean;
    registerDndItem?: RegisterDndItemFn;
    index?: number;
    action: (presentation: Doc) => void;
}


function ShowSlide(props: props) {
    const itemWithId = props.doc.pages.find(item => item.id === props.curr);
    if (itemWithId) {
        const element: Array<TextBlock | Primitiv | ImageBlock> = itemWithId.slide
        return (
            <div className={styles.Slide}>
                {element?.map((element) => {
                    return <ShowBlock id={String(element.id)} key={element.id} data={element} isWorkSpace={props.isWorkSpace} doc={props.doc} setDoc={props.action}/>
                })}
            </div>
        )
    }
    else {
        return (
            <div className={styles.Slide}>

            </div>)
    }
}

export default ShowSlide