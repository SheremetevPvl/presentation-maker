import { ImageBlock } from "../../Types and examples";

function imageblock(props: ImageBlock){
    const imageurl = props.data
    return (
        <img src={imageurl}></img>
    )
}