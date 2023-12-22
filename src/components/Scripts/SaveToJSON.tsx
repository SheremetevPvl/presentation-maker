
import { Doc } from '../../Types and examples';


type ExportProps = {
    action: Doc,
}

function SaveToFile(props: ExportProps) {
    //const saveObj = { dataFile }; // tmp

    // file setting
    const presentation = props.action;
   // const src = "./images/save.png";

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


    return (
        <button onClick= { downloadFile }> Export </button>
      );
}

export default SaveToFile;