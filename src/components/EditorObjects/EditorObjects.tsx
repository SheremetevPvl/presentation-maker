import { Objects,  } from "../../Types and examples"
import TextSlide from "../TextBlock/TextBlock"
import Image from "../Image/Image"
import SlidePrimitive from "../Primitiv/Primitiv"


type SlideObjectProps = {
    data: Objects;
    preview: boolean,
  }
  
  function getObject(data: Objects) {
    switch (data.type) {
      case 'Primitiv':
        return <SlidePrimitive {...data}/>
  
      case 'TextBlock':
        return <TextSlide data={data}/>
  
      case 'Image':
        return <Image data={data}/>
    }
  }
  
  const EditorObject = (props: SlideObjectProps) => {
    const data = props.data;
  
    return (
      <div>
        {getObject(data)}
      </div>
    )
  }
  export default EditorObject