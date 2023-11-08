import { Primitiv } from "../../Types and examples";
import Rectangle from "./Figures/Rectangle";
import Circle from "./Figures/Circle";
import Triangle from "./Figures/Triangle";

function ShowPrimitiv(props: Primitiv) {
    const type = props.data.shape
    if (type === "Circle") {
        return <Circle key={props.id} data={props} />;
    } else if (type === "Rectangle") {
        return <Rectangle key={props.id} data={props} />;
    }
    else if (type === "Triangle") {
        return <Triangle key={props.id} data={props} />;
    }
    return null;
}

export default ShowPrimitiv;