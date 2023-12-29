import styles from '../ToolBar/ToolBar.module.css';
import { Doc } from '../../Types and examples';


type ExportProps = {
    action: Doc,
}

function SaveToFile(props: ExportProps) {

    const presentation = props.action;

    const file = new Blob([JSON.stringify(presentation)], {
        type: "application.json",
    });
    function downloadFile() {
        const url = URL.createObjectURL(file);
        const link = document.createElement("a");
        link.href = url;
        link.download = "file.json";
        link.click();
    }

    const ButtonTextClass = styles.Button + ' ' + styles.TextButton;

    return (
        <button className={ButtonTextClass} onClick= {downloadFile}> Export </button>
      );
}

export default SaveToFile;