import { ImageBlock } from "../../Types and examples";
import { CSSProperties } from "react";
//import { SizeOfObj } from "../../Types and examples";

// type Pos = {
//   x: number,
//   y: number,
// }

type ImageProps = {
    data: ImageBlock;
    decrease: number;
    //pos: Pos;
  };
  
function Image(props: ImageProps) {   
   const style: CSSProperties = 
   {
     
      width: props.data.size.width / props.decrease,
      height: props.data.size.height / props.decrease,
      position: 'absolute',
      cursor: "move",
   }
    return (
        <img style={style} src={props.data.urldata} ></img>
    )
}

export default Image