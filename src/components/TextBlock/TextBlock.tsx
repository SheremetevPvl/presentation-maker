import { CSSProperties } from 'react';
import {TextBlock, Char} from '../../Types and examples';


type TextProps = {
    data: TextBlock;
  }

  const TextSlide = (props: TextProps) => {
    const data = props.data;

    return (
        <div>
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
  
    return <span>{data.value}</span>
  }
  

export default TextSlide