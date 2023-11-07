import "../../Types and examples";
import { ImageBlock } from "../../Types and examples";
import { CSSProperties } from "react";

type ImageProps = {
    data: ImageBlock
  };

function Image(props: ImageProps) {

   const style: CSSProperties = 
   {
      marginLeft: props.data.coordinates.x,
      marginTop: props.data.coordinates.y,
      width: props.data.width,
      height: props.data.height,
      position: 'absolute',
   }

    return (
        <img style={style} src={props.data.urldata} ></img>
    )
}

export default Image