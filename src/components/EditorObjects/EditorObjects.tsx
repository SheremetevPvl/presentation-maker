import { Objects,  } from "../../Types and examples"
import TextSlide from "../TextBlock/TextBlock"
import Image from "../Image/Image"
import SlidePrimitive from "../Primitiv/Primitiv"


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
  
    return (
      <div>
        {getObject(data)}
      </div>
    )
  }
  export default EditorObject
  