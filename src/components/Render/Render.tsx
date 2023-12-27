import { TextBlock , ImageBlock , Primitiv} from "../../Types and examples";
import EditorObject from "../EditorObjects/EditorObjects";
import styles from '../Render/Render.module.css';

type RenderProps = {
    selected: boolean,
    slide: Array< TextBlock | ImageBlock | Primitiv>,
    id: string
  };
 
  //в map для ключа использовать id чтобы не пересчитывались элементы
const Render = (props: RenderProps) => {

  let classSlide: string = styles.Slides;
  if (props.selected) {
    classSlide = classSlide + ' ' + styles.SmallSlideSelect
  }
  else
  {
    classSlide = classSlide + ' ' + styles.SmallSlide
  }
  
    return (
      <div className = {classSlide}>
          {props.slide.map((obj) => (
            <EditorObject key={props.id} data={obj} preview={true}/>
          ))}
      </div>
    )
  }

export default Render