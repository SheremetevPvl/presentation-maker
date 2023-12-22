import './ToolBar.css'; 
//import {saveJsonObjToFile} from '../Scripts/SaveToJSON';

// function DownloadButton() {
//     return (
//         <button className='Button TextButton' onClick={saveJsonObjToFile}>Download</button>
//     )
// }

function AddYourFileButton() {
    return (
        <div className='InputWrapper'>
            <input className='Input' type="file" id="input_file"/>
            <label className='Button TextButton InputLabel' htmlFor="input_file">Change my file</label>
        </div>
    )
}

function AddSlide() {
    return (
        <button className='Button TextButton'>NewSlide
        </button>
    )
}


function UndoButton() {
    return (
        <button className='Button'>
                <img  className='Operation Undo' src="https://cdn4.iconfinder.com/data/icons/ios-edge-glyph-9/25/Redo-3-1024.png" alt="" />
        </button>
    )
}

function RedoButton() {
    return (
        <button className='Button'>
            <img  className='Operation ' src="https://cdn4.iconfinder.com/data/icons/ios-edge-glyph-9/25/Redo-3-1024.png" alt="" />
        </button>
    )
}

function FontButton() {
    return (
        <button className='Button TextButton'>Шрифт</button>
    )
}
function ColorButton() {
    return (
        <button className='Button TextButton'>Цвет</button>
    )
}

function AddTextButton() {
    return (
        <button className='Button TextButton'>Текстовое поле</button>
    )
}

function AddImageButton() {
    return (
        <button className='Button TextButton'>
            Вставить изображение
        </button>
    )
}

function AddPrimitivButton() {
    return (
        <button className='Button TextButton'>
            Фигура
        </button>
    )
}

function ToolBar() {
    return (
        <div className='ToolBar'>
            <AddYourFileButton />
            <AddSlide />
            <UndoButton/>
            <RedoButton/>
            <FontButton />
            <ColorButton />
            <AddTextButton />
            <AddImageButton />
            <AddPrimitivButton />
        </div>
    )
}

export default ToolBar