import { CSSProperties } from 'react';
import {TextBlock, Char} from '../../Types and examples';


function textblock(value: TextBlock){
    const style: CSSProperties = {
        
    }
    const text: Array<Char> = value.data
    return (
        <div>
            {text.map((text) =>
               <span key = {text.id}>{text.value}</span>
            )}
        </div>
    )
}

export default textblock