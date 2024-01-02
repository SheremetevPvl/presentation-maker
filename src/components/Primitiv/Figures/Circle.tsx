import { Primitiv } from "../../../Types and examples";
import { CSSProperties } from "react";

type FigureProps = {
    data: Primitiv;
    decrease: number;
  }

const Circle = (props: FigureProps)  => {

   const Params: CSSProperties = 
   {
      position: 'absolute',
      marginTop: props.data.coordinates.y / props.decrease,
      marginLeft: props.data.coordinates.x / props.decrease,
      borderBlockColor: props.data.data.boldcolor,
      backgroundColor: props.data.data.color,
      width: props.data.size.width / props.decrease,
      height: props.data.size.height / props.decrease,
      borderRadius: props.data.size.width / 2 / props.decrease,
   }

    return (
        <div style={Params}>
        </div>
    )
}

export default Circle