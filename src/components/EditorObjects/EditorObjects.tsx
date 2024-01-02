import { Objects  } from "../../Types and examples"
import TextSlide from "../TextBlock/TextBlock"
import Image from "../Image/Image"
import SlidePrimitive from "../Primitiv/Primitiv"
import { CSSProperties } from "react";


type SlideObjectProps = {
    data: Objects;
    preview: boolean,
  }
  
  function getObject(data: Objects) {
    const decrease: number = 4;
    switch (data.type) {
      case 'Primitiv':
        return <SlidePrimitive data={data} decrease={decrease}/>
  
      case 'TextBlock':
        return <TextSlide data = {data} decrease={decrease}/>
  
      case 'Image':
        return <Image data={data} decrease={decrease}/>
    }
  }
  
  const EditorObject = (props: SlideObjectProps) => {
    const data = props.data;
    const Params: CSSProperties = 
    {
      position: "absolute",
      left: props.data.coordinates.x / 4,
      top: props.data.coordinates.y / 4,
    }
    return (
      <div style={Params}>
        {getObject(data)}
      </div>
    )
  }
  export default EditorObject
  