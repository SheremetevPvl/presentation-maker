import styles from '../Slide/Slide.module.css';
import {TextBlock, Primitiv, ImageBlock, Doc, Block} from '../../Types and examples';
import Textblock from '../TextBlock/TextBlock';
import PrimitivObg from '../Primitiv/Primitiv';
import Image from '../Image/Image';
import { PresentationContext } from "../Context/Context";
import { CSSProperties, useContext, useEffect, useRef } from "react";
import { useDragAndDropObject } from '../hooks/DragAndDrop/DnDobj';

type BlockProps = {
    data: Block& TextBlock | Block& ImageBlock | Block& Primitiv;
    id: string;
    isWorkSpace: boolean;
}

function ShowBlock({data, id, isWorkSpace}: BlockProps) {
    const { selectedBlockId, setSelectedBlockId } = useContext(PresentationContext)
    const { presentation, setPresentation } = useContext(PresentationContext)
    const newPresentation = { ...presentation }
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
                            const block = newPresentation.pages[Number(newPresentation.current)].slide?.find((elem) => elem.id == Number(id))!
                            block.coordinates = position
                            setPresentation(newPresentation)
                        },
                    })
            }
            const onMouseWheel = (event: WheelEvent) => {
                if (selectedBlockId === id && data.type !== 'TextBlock') {
                    const newSize = {
                        height: data.size.height + event.deltaY,
                        width: data.size.width + event.deltaY,
                    }
                    const currentBlock = newPresentation.pages[Number(newPresentation.current)].slide?.find((element) => element.id === Number(id))!
                    currentBlock.size = newSize
                    setPresentation(newPresentation)
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
    return (
        <div className={styles.block} id={id} style={position} ref={ref}>
            {data.type === "TextBlock" && <Textblock data={data} decrease={decrease}/>}
            {data.type === "Image" && <Image data={data} decrease={decrease}/>}
            {data.type === "Primitiv" && <PrimitivObg data={data} decrease={decrease}/>}
        </div>
    )
}    

export default ShowBlock