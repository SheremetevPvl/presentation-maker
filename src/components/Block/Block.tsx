import '../../Types and examples'
import { ImageBlock, Primitiv, TextBlock } from '../../Types and examples'
import Image from '../Image/Image'
import Text from '../TextBlock/TextBlock'

function Block({data, type}: TextBlock|ImageBlock|Primitiv) {
    return (
        <div>
            {type === "Image" && <Image data={data} />}
            {type === "TextBlock" && <Text  {...data} />}
            {type === "Primitiv" && <Primitiv  {...data} />}
        </div>
    )
}

export default Block