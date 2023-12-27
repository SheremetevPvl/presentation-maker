import styles from '../Document/Document.module.css';
import ToolBar from '../ToolBar/ToolBar';
import PagesView from '../PagesView/PagesView';

function ShowDocument() {
    return ( 
        <div className={styles.Document}>
            <ToolBar></ToolBar>
           <PagesView />
        </div>
    )
}

export default ShowDocument