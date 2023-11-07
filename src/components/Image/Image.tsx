import "../../Types and examples";
import { ImageBlock } from "../../Types and examples";

type ImageProps = {
    data: ImageBlock
  };

function Image(props: ImageProps) {
    return (
        <img src={props.data.urldata} ></img>
    )
}

export default Image