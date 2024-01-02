import styles from '../Block/Block.module.css';
import {TextBlock, Primitiv, ImageBlock, Doc} from '../../Types and examples';
import Textblock from '../TextBlock/TextBlock';
import PrimitivObg from '../Primitiv/Primitiv';
import Image from '../Image/Image';
//import { PresentationContext } from "../Context/Context";
import { CSSProperties, useEffect, useRef, useState } from "react";
import { useDragAndDropObject } from '../hooks/DragAndDrop/DnDobj';

type BlockProps = {
    data:  TextBlock | ImageBlock | Primitiv;
    id: string;
    isWorkSpace: boolean;
    doc: Doc;
    setDoc: (presentation: Doc) => void;
}

function ShowBlock({data, id, isWorkSpace, setDoc, doc}: BlockProps) {
    //const { selectedBlockId, setSelectedBlockId } = useContext(PresentationContext)
    const [selectedBlockId, setSelectedBlockId] = useState("0")
    const newPresentation = { doc }
    const { registerDndItem } = useDragAndDropObject()
    const ref = useRef<HTMLDivElement>(null)
    const position: CSSProperties = {
        left: data.coordinates.x,
        top: data.coordinates.y,
    }

    if (isWorkSpace)
    {   //выделение блока
        useEffect(() => {
            const block: HTMLDivElement = ref.current!
            const handleClick = (event: MouseEvent) => {
                if (block && block?.contains(event.target as Node))
                {
                    block.style.outline = "3px solid #1A73E8"
                    block.style.outlineOffset = "1px"
                    setSelectedBlockId(id)
                } else {
                    block.style.outline = "none"
                    block.style.outlineOffset = "none"
                }
            }
            ref.current!.parentElement?.addEventListener("mousedown", handleClick)
            return () => {
                ref.current?.parentElement?.removeEventListener("mousedown", handleClick)
            }
        }, [])
        // DnD and resize objects
        useEffect(() => {
            const { onDragStart } = registerDndItem({ elementRef: ref })
            const onMouseDown = (event: MouseEvent) => {
                    onDragStart({
                        onDrag: (dragEvent) => {
                            dragEvent.preventDefault()
                            ref.current!.style.top = `${dragEvent.clientY + (data.coordinates.y - event.clientY)}px`
                            ref.current!.style.left = `${dragEvent.clientX + (data.coordinates.x - event.clientX)}px`
                        },
                        onDrop: (dropEvent) => {
                            const position = {
                                x: dropEvent.clientX + (data.coordinates.x - event.clientX),
                                y: dropEvent.clientY + (data.coordinates.y - event.clientY),
                            }
                            const currentPage = newPresentation.doc.pages?.[Number(newPresentation.doc.current)];
                            const block = currentPage?.slide?.find((elem) => elem.id === Number(id));
                            if (block) {
                                block.coordinates = position
                                setDoc(newPresentation.doc)
                            }
                        },
                    })
            }
            const onMouseWheel = (event: WheelEvent) => {
                if (selectedBlockId === id && data.type !== 'TextBlock') {
                    const newSize = {
                        height: data.size.height + event.deltaY,
                        width: data.size.width + event.deltaY,
                    }
                    const currentPage = newPresentation.doc.pages?.[Number(newPresentation.doc.current)];
                    const currentBlock = currentPage?.slide?.find((elem) => elem.id === Number(id));
                    if (currentBlock) {
                        currentBlock.size = newSize
                        setDoc(newPresentation.doc)
                    }
                    setDoc(newPresentation.doc)
                }
            }
            ref.current!.addEventListener('mousedown', onMouseDown)
            ref.current!.addEventListener('wheel', onMouseWheel, { passive: true})
            return () => {
                ref.current?.removeEventListener('mousedown', onMouseDown)
                ref.current?.removeEventListener('wheel', onMouseWheel)
            }
        }, [selectedBlockId])
    }
    const decrease: number = 1;
    //console.log(styles.block)
        return (
        <div className={styles.block} id={id} style={position} ref={ref}>
            {data.type === "TextBlock" && <Textblock data={data} decrease={decrease}/>}
            {data.type === "Image" && <Image data={data} decrease={decrease}/>}
            {data.type === "Primitiv" && <PrimitivObg data={data} decrease={decrease}/>}
        </div>
    )
}    

export default ShowBlock