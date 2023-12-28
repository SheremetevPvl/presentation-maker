import { Doc } from '../../Types and examples';


type ButtonProps = {
  action: (presentation: Doc) => void;
};

function ImportFile(props: ButtonProps) {

  const setDoc = props.action;

  function uploadFile() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "application/json";
    input.addEventListener("change", (event) => {
      const selectedFile = (event.target as HTMLInputElement).files?.[0];

      if (selectedFile) {
        const reader = new FileReader();
        reader.onload = () => {
          const fileContent = JSON.parse(reader.result as string) as Doc;
          setDoc(fileContent);
        };
        reader.readAsText(selectedFile);
      }
    });

    input.click();
  }

  return (
    <button onClick={uploadFile}> Import </button>
  );
}

export default ImportFile;