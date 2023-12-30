import { PageInfo } from '../../Types and examples';
import styles from '../SlideBar/SlideBar.module.css';

type Data = {
    slides: PageInfo[]
    current: string | null
    action: (CurrId: string | null, slides: PageInfo[]) => void;
}

const AddNewSlideButton: React.FC<Data>= (props) => {
    
    const newSlides = [...props.slides];
    const currid = props.current

    const HandleAdd = (id: string | null, slides: PageInfo[]) => {
      props.action(id, slides);
      const newSlide: PageInfo = {
          selected: true,
          id: "1",
          slide: [],
          selectObjects: null,
      }
      newSlides.splice(Number(id), 0, newSlide);
      for (let I = Number(id); I < newSlides.length; I++)
      {
        newSlides[I].id = String(I+1);
        console.log(newSlides[I].id);
      }
    };
  
    const ImportFileClass = styles.Button + ' ' + styles.TextButton + ' ' + styles.InputLabel;

    return (
      <div>
        <button className={ImportFileClass} onClick={() => HandleAdd(String(currid), newSlides)}>NewSlide</button>
      </div>
    );
  };
  
  export default AddNewSlideButton;