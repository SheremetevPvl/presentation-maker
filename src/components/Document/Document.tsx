import '../../Types and examples';
import { Doc, Page } from '../../Types and examples';

function ShowDocument(doc: Doc) {
    const name = doc.name
    const pages: Array<Page> = doc.pages
    return (
        <div>
            {pages.map}((elements) =>
                <div key = {slides.}></div>
            )}
             //передать пропсом слайд в компонент слайд
        </div>
    )
}

export default ShowDocument