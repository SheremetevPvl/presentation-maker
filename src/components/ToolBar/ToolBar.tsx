import './ToolBar.css';

function ToolBar() {
    return (
        <div className='ToolBar'>
            <DownloadButton />
            <FontButton />
            <ColorButton />
            <AddTextButton />
            <AddImageButton />
            <AddPrimitivButton />
        </div>
    )
}

function DownloadButton() {
    return (
        <button className='Button'>Download</button>
    )
}

function FontButton() {
    return (
        <button className='Button'>Aa</button>
    )
}

function ColorButton() {
    return (
        <button className='Button'></button>
    )
}

function AddTextButton() {
    return (
        <button>T</button>
    )
}

function AddImageButton() {
    return (
        <button>
            <img></img>
        </button>
    )
}

function AddPrimitivButton() {
    return (
        <button>
            <div></div>
        </button>
    )
}

export default ToolBar