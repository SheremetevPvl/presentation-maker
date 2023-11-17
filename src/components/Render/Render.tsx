import "../../Types and examples";
import { TextBlock , ImageBlock , Primitiv} from "../../Types and examples";
import EditorObject from "../EditorObjects/EditorObjects";
import './Render.css';


type RenderProps = {
    selected: boolean,
    slide: Array< TextBlock | ImageBlock | Primitiv>;
  };

//в map для ключа использовать id чтобы не пересчитывались элементы

const Render = (props: RenderProps) => {
    return (
      <div className="SmallSlide">
          {props.slide.map((obj, i) => (
            <EditorObject key={i} data={obj} preview={true}/>
          ))}
      </div>
    )
  }

export default Render