 import styles from '../ToolBar/ToolBar.module.css';

const TextButtonClass = styles.Button + ' ' + styles.TextButton;
const OperationUndoClass = styles.Operation + ' ' + styles.Undo;

function AddSlide() {
    return (
        <button className={TextButtonClass}>NewSlide
        </button>
    )
}


function UndoButton() {
    return (
        <button className={styles.Button}>
                <img  className={OperationUndoClass} src="https://cdn4.iconfinder.com/data/icons/ios-edge-glyph-9/25/Redo-3-1024.png" alt="" />
        </button>
    )
}

function RedoButton() {
    return (
        <button className={styles.Button}>
            <img  className={styles.Operation} src="https://cdn4.iconfinder.com/data/icons/ios-edge-glyph-9/25/Redo-3-1024.png" alt="" />
        </button>
    )
}

function FontButton() {
    return (
        <button className={TextButtonClass}>Шрифт</button>
    )
}
function ColorButton() {
    return (
        <button className={TextButtonClass}>Цвет</button>
    )
}

function AddTextButton() {
    return (
        <button className={TextButtonClass}>Текстовое поле</button>
    )
}

function AddImageButton() {
    return (
        <button className={TextButtonClass}>
            Вставить изображение
        </button>
    )
}

function AddPrimitivButton() {
    return (
        <button className={TextButtonClass}>
            Фигура
        </button>
    )
}

function ToolBar() {
    return (
        <div className={styles.ToolBar}>
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