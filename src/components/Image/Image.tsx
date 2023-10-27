import "../../Types and examples";
import { ImageBlock } from "../../Types and examples";

type ImageProps = {
    data: {
      urldata: string;
    };
  };

function Image({data}: ImageProps) {
    return (
        <img src={data.urldata} ></img>
    )
}

export default Image