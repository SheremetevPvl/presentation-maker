import "../../Types and examples";
import { ImageBlock } from "../../Types and examples";
import { CSSProperties } from "react";

type ImageProps = {
    data: ImageBlock;
    decrease: number;
  };

function Image(props: ImageProps) {

   const style: CSSProperties = 
   {
      marginLeft: props.data.coordinates.x / props.decrease,
      marginTop: props.data.coordinates.y / props.decrease,
      width: props.data.width / props.decrease,
      height: props.data.height / props.decrease,
      position: 'absolute',
   }

    return (
        <img style={style} src={props.data.urldata} ></img>
    )
}

export default Image