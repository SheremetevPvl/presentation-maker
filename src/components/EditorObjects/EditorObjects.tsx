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
      /* case 'Primitiv':
        return <SlidePrimitive data={data}/> */
  
      case 'TextBlock':
        return <TextSlide data={data}/>
  
      case 'Image':
        return <Image data={data}/>
    }
  }
  
  const EditorObject = (props: SlideObjectProps) => {
    const data = props.data;
    // const style = {
    //   left: data.position.x,
    //   top: data.position.y,
    //   width: data.size.width,
    //   height: data.size.height,
    //   transform: `rotate(${props.data.rotate}deg)`,
    //   transformOrigin: `${(props.data.size.width)/2}px ${(props.data.size.height)/2}px`,
    // }
  
    return (
      <div>
        {getObject(data)}
      </div>
    )
  }
  export default EditorObject