import styles from '../Slide/Slide.module.css';
import {TextBlock, Primitiv, ImageBlock, Doc} from '../../Types and examples';
import Textblock from '../TextBlock/TextBlock';
import PrimitivObg from '../Primitiv/Primitiv';
import Image from '../Image/Image';
import { CSSProperties, useContext, useEffect, useRef } from "react";
import { useDnDBlock } from '../hooks/DragAndDrop/DnDSlide'
import { PresentationContext } from "../Context/Context";

type props= {
    doc: Doc,
    curr: string
}


function ShowSlide(props: props) {
    const Slides = props.doc.pages
    const itemWithId = Slides.find(item => item.id === props.curr);
    
  
    const { presentation, setPresentation } = useContext(PresentationContext);


    const newPresentation = { ...presentation };
    const currentSelectObject = newPresentation.pages.find(
      (slide) => slide.id === newPresentation.current,
    )?.selected;
    const currentSlide = newPresentation.pages.find(
      (slide) => slide.id === newPresentation.current,
    );
    console.log('Перерисовка')
  

    // const styles: CSSProperties = {
    //   height: element.,
    //   left: position.x,
    //   top: position.y,
    //   width: size.width,
    // };
  
    // const { registerDndItem } = useDnDBlock();
  
    // const ref = useRef<HTMLDivElement>(null);
  
    // const toggleArea = () => {
    //   const currentSlide = newPresentation.pages.find(
    //     (slide) => slide.id === presentation.current,
    //   );
  
    //   if (currentSlide) {
    //     const updatedSlides = newPresentation.pages.map((slide) =>
    //       slide.id === presentation.current
    //         ? { ...slide, current: id }
    //         : slide,
    //     );
  
    //     newPresentation.pages = updatedSlides;
    //     setPresentation(newPresentation);
    //   }
    // };
  
    // const setPosition = (pos: { x: number; y: number }) => {
    //   if (currentSlide) {
    //     const updatedObjects = currentSlide.slide.map((obj) =>
    //       obj.id === id ? { ...obj, position: { x: pos.x, y: pos.y } } : obj,
    //     );
  
    //     const updatedSlide = { ...currentSlide, objects: updatedObjects };
  
    //     const updatedSlides = newPresentation.pages.map((slide) =>
    //       slide.id === newPresentation.current ? updatedSlide : slide,
    //     );
  
    //     newPresentation.pages = updatedSlides;
    //     setPresentation(newPresentation);
    //   }
    // };
  
    // const setSize = (size: { height: number; width: number }) => {
    //   if (currentSlide) {
    //     const updatedObjectsSize = currentSlide.slide.map((obj) =>
    //       obj.id === id && (obj.type === "Primitiv" || obj.type === "Image")
    //         ? {
    //             ...obj,
    //             size: {
    //               height: size.height < 100 ? 100 : size.height,
    //               width: size.width < 100 ? 100 : size.width,
    //             },
    //           }
    //         : obj,
    //     );
  
    //     const updatedSlide = {
    //       ...currentSlide,
    //       objects: updatedObjectsSize,
    //     };
  
    //     const updatedSlides = newPresentation.pages.map((slide) =>
    //       slide.id === newPresentation.current ? updatedSlide : slide,
    //     );
  
    //     newPresentation.pages = updatedSlides;
    //     setPresentation(newPresentation);
    //   }
    // };
  
    // useEffect(() => {
    //   // TODO: эту логику перемещения можно вынести в отдельный компонент, div, который сможет отрисовывать в себе любой контент
    //   const { onChangePosition, onChangeSize } = registerDndItem();
  
    //   const onMouseDown = (mouseDownEvent: MouseEvent) => {
    //     if (currentSelectObject !== id) {
    //       return; // Если toggleArea не активен, выходим из функции
    //     }
  
    //     if (!mouseDownEvent.shiftKey) {
    //       // console.log(mouseDownEvent);
    //       onChangePosition({
    //         onDrag: (dragEvent) => {
    //           dragEvent.preventDefault();
    //           const pos = {
    //             x: dragEvent.clientX + (position.x - mouseDownEvent.clientX),
    //             y: dragEvent.clientY + (position.y - mouseDownEvent.clientY),
    //           };
    //           setPosition(pos);
    //         },
    //       });
    //     } //else {
    //     //   onChangeSize({
    //     //     onDrag: (dragEvent) => {
    //     //       console.log("перерисовка");
    //     //       dragEvent.preventDefault();
    //     //       const sizes = {
    //     //         height: size.height + dragEvent.clientY - mouseDownEvent.clientY,
    //     //         width: size.width + dragEvent.clientX - mouseDownEvent.clientX,
    //     //       };
    //     //       setSize(sizes);
    //     //     },
    //     //   });
    //     //}
    //   };
    //   if (currentSelectObject !== null) {
    //     const control = ref.current!;
    //     control.addEventListener("mousedown", onMouseDown);
    //     return () => control.removeEventListener("mousedown", onMouseDown);
    //   }
    // }, [newPresentation]);

    //const itemWithId = Slides.find(item => item.id === props.curr);
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