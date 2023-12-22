import { Primitiv } from "../../Types and examples";
import Rectangle from "./Figures/Rectangle";
import Circle from "./Figures/Circle";
import Triangle from "./Figures/Triangle";

type PrimitivProps = {
    data: Primitiv;
    decrease: number;
}

function ShowPrimitiv(props: PrimitivProps) {
    const data = props.data

    const type = data.data.shape
    if (type === "Circle") {
        return <Circle key={data.id} data={data} decrease={props.decrease}/>;
    } else if (type === "Rectangle") {
        return <Rectangle key={data.id} data={data} decrease={props.decrease}/>;
    }
    else if (type === "Triangle") {
        return <Triangle key={data.id} data={data} decrease={props.decrease}/>;
    }
    return null;
}

export default ShowPrimitiv;