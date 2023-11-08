import { Primitiv } from "../../../Types and examples";
import { CSSProperties } from "react";

type FigureProps = {
    data: Primitiv;
  }

const Rectangle = (props: FigureProps) => {

    const Params: CSSProperties = 
    {
      position: 'absolute',
      marginTop: props.data.coordinates.y,
      marginLeft: props.data.coordinates.x,
      borderBlockColor: props.data.data.boldcolor,
      backgroundColor: props.data.data.color,
      width: props.data.data.width,
      height: props.data.data.height,

    }

    return (
      <div style={Params}>
      </div>
    )
}

export default Rectangle