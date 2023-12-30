import { PageInfo } from '../../Types and examples';
import styles from "../SlideBar/SlideBar.module.css";

const TextButtonClass = styles.Button + ' ' + styles.TextButton;

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
      const prevId = Number(id);
      newSlides.splice(Number(id), 0, newSlide);
      for (let I = Number(id); I < newSlides.length; I++)
      {
        newSlides[I].id = String(I+1);
        console.log(newSlides[I].id);
      }
    };
  
    return (
      <div>
        <button className={TextButtonClass} onClick={() => HandleAdd(String(currid), newSlides)}>NewSlide</button>
      </div>
    );
  };
  
  export default AddNewSlideButton;