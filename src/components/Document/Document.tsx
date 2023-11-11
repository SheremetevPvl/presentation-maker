import '../../Types and examples';
import ToolBar from '../ToolBar/ToolBar';
import './Document.css';
import PagesView from '../PagesView/PagesView';

function ShowDocument() {
    return ( 
        <div className='Document'>
            <ToolBar></ToolBar>
           <PagesView />
        </div>
    )
}

export default ShowDocument