import * as dataFile from '../../Maximal data collection';

function saveJsonObjToFile() {
    const saveObj = { dataFile }; // tmp

    // file setting
    const text = JSON.stringify(saveObj);
    const name = "sample.json";
    const type = "text/plain";

    // create file
    const a = document.createElement("a");
    const file = new Blob([text], { type: type });
    a.href = URL.createObjectURL(file);
    a.download = name;
    document.body.appendChild(a);
    a.click();
    a.remove();
}

export {saveJsonObjToFile}