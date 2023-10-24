import '../../Types and examples';
import { Doc, Page } from '../../Types and examples';
import SlideBar from '../SlideBar/SlideBar';
import WorkArea from '../WorkSpace/WorkSpace'

function ShowDocument(doc: Doc) {
    const name = doc.name
    const pages: Array<Page> = doc.pages
    return (
        <div>
           <SlideBar {...pages}/>
           <WorkArea {...doc.current}/>
        </div>
    )
}

export default ShowDocument