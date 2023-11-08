import { Primitiv } from "../../../Types and examples";
import { CSSProperties } from "react";

type FigureProps = {
    data: Primitiv;
  }

const Triangle = (props: FigureProps) => {

    const Params: CSSProperties = 
    {
      position: 'absolute',
      marginTop: props.data.coordinates.y,
      marginLeft: props.data.coordinates.x,
      borderLeft: props.data.data.width / 2,
      borderLeftStyle: 'solid',
      borderLeftColor: 'transparent',
      borderRight: props.data.data.width / 2,
      borderRightStyle: 'solid',
      borderRightColor: 'transparent',
      borderBottom: props.data.data.height,
      borderBottomStyle: 'solid',
      borderBottomColor: props.data.data.color,
    }

    return (
        <div style={Params}>
        </div>
    )
} 

export default Triangle