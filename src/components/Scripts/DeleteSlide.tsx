import { PageInfo } from '../../Types and examples';
import styles from '../SlideBar/SlideBar.module.css';

type Data = {
    slides: PageInfo[]
    current: string | null
    action: (CurrId: string | null, slides: PageInfo[]) => void;
}

const DeleteButton: React.FC<Data>= (props) => {
    
    const newSlides = [...props.slides];
    const currid = props.current

    const handleDelete = (id: string | null, slides: PageInfo[]) => {
      props.action(id, slides);
      newSlides.splice(Number(id) - 1, 1);
      for (let I = Number(id) - 1; I < newSlides.length; I++)
      {
        newSlides[I].id = String(I+1);
        console.log(newSlides[I].id);
      }
    };
  
    const ButtonClassname = styles.Button + ' ' + styles.TextButton + ' ' + styles.InputLabel;

    return (
      <div>
        <button className={ButtonClassname} onClick={() => handleDelete(String(currid), newSlides)}>Delete slide</button>
      </div>
    );
  };
  
  export default DeleteButton;