import { CSSProperties } from 'react';
import {TextBlock, Char} from '../../Types and examples';


function textblock(value: TextBlock){
    const style: CSSProperties = {
        
    }
    const id = value.id
    const coord = value.coordinates
    const boldcolor = value.boldcolor
    const text: Array<Char> = value.chars
    return (
        <div>
            {text.map((text) =>
               <span key = {text.id}>{text.value}</span>
            )}
        </div>
    )
}

export default textblock