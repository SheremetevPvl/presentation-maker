import "../../Types and examples";
import { TextBlock , ImageBlock , Primitiv} from "../../Types and examples";
import EditorObject from "../EditorObjects/EditorObjects";



type RenderProps = {
    selected: boolean,
    slide: Array< TextBlock | ImageBlock | Primitiv>;
  };

const Render = (props: RenderProps) => {
    return (
      <div>
          {props.slide.map((obj, i) => (
            <EditorObject key={i} data={obj} preview={true}/>
          ))}
      </div>
    )
  }

export default Render