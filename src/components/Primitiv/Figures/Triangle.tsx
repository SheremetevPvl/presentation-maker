import { Primitiv } from "../../../Types and examples";
import { CSSProperties } from "react";

type FigureProps = {
    data: Primitiv;
    decrease: number;
  }

const Triangle = (props: FigureProps) => {

    const Params: CSSProperties = 
    {
      position: 'absolute',
      borderLeft: props.data.size.width / 2 / props.decrease,
      borderLeftStyle: 'solid',
      borderLeftColor: 'transparent',
      borderRight: props.data.size.width / 2 / props.decrease,
      borderRightStyle: 'solid',
      borderRightColor: 'transparent',
      borderBottom: props.data.size.height / props.decrease,
      borderBottomStyle: 'solid',
      borderBottomColor: props.data.data.color,
    }

    return (
        <div style={Params}>
        </div>
    )
} 

export default Triangle