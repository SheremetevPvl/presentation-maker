import '../../Types and examples';
import SlideBar from '../SlideBar/SlideBar';
import { doc as TDoc} from '../../Maximal data collection';
import ShowSlide from '../Slide/Slide';
import styles from "./PagesView.module.css";
import SaveToFile  from '../Scripts/SaveToJSON';
import ImportFile from '../Scripts/ImportJson';
import { useState } from "react";


  

function PagesView() {
    const [doc, setDoc] = useState<typeof TDoc>(TDoc);
    return ( 
        <div className={styles.SlidesDisplay}>
           <SlideBar slides={doc.pages} action={(currId) => setDoc({ ...doc, current: currId })}/>
           <ShowSlide doc ={doc} curr = {doc.current}/>
           <div className={styles.FileOp}>
                <SaveToFile action={doc}/>
                <ImportFile action={setDoc}/>
           </div>
        </div>
    )
}

export default PagesView