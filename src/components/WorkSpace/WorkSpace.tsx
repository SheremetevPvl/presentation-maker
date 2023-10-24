import '../../Types and examples'
import { Page } from '../../Types and examples'
import ShowSlide from '../Slide/Slide'

function WorkSpace(slide: Page) {
    return (
        <div>
            <ShowSlide {...slide}/>
        </div>
    )
}
export default WorkSpace