import { CSSProperties } from 'react';
import {TextBlock, Char} from '../../Types and examples';



type CharObjectProps = {
  data: Char;
  decrease: number;
}

const CharObject = (props: CharObjectProps) => {
  const data = props.data

  const CharStyle: CSSProperties =
  {
    fontSize: data.fontsize / props.decrease,
    fontFamily: data.fontfamily,
    color: data.color,
  }

  return <span style={CharStyle}>{data.value}</span>
}


type TextProps = {
    data: TextBlock;
    decrease: number;
  }

  const TextSlide = (props: TextProps) => {
    const data = props.data;

    
    const BlockStyle: CSSProperties = 
    {
      padding: 2,
      borderBlockColor: data.boldcolor,
      backgroundColor: data.background,
      marginLeft: data.coordinates.x / props.decrease,
      marginTop: data.coordinates.y / props.decrease,
      width: 'max-content',
      position: 'absolute',
    }

    return (
      <div style={BlockStyle}>
          {data.data.map((char, id) => (
              <CharObject key={id} data={char} decrease={props.decrease}/>
          ))}
      </div>
    )
}

  


export default TextSlide