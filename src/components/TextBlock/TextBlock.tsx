import { CSSProperties } from 'react';
import {TextBlock, Char} from '../../Types and examples';

type TextProps = {
    data: TextBlock;
  }

  const TextSlide = (props: TextProps) => {
    const data = props.data;

    const BlockStyle: CSSProperties = 
    {
      padding: 2,
      borderBlockColor: data.boldcolor,
      backgroundColor: data.background,
      marginLeft: data.coordinates.x,
      marginTop: data.coordinates.y,
      width: 'max-content',
      position: 'absolute',
    }

    return (
      <div style={BlockStyle}>
          {data.data.map((char, id) => (
              <CharObject key={id} data={char} />
          ))}
      </div>
    )
}
type CharObjectProps = {
    data: Char;
  }
  
  const CharObject = (props: CharObjectProps) => {
    const data = props.data
  
    const CharStyle: CSSProperties =
    {
      fontSize: data.fontsize,
      fontFamily: data.fontfamily,
      color: data.color,
    }

    return <span style={CharStyle}>{data.value}</span>
  }
  

export default TextSlide