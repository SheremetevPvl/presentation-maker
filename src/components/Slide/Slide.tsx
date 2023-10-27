import '../../Types and examples'
import { Page, TextBlock, Primitiv, ImageBlock } from '../../Types and examples';
import Block from '../Block/Block'

function ShowSlide(Slide: Page) {
    const element: Array <TextBlock | Primitiv | ImageBlock> = Slide.elements
    return (
        <div>
            {element.map((element) =>
               <Block key = {element.id} {...element}/>
            )}
        </div>
    )
}

export default ShowSlide