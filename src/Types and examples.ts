

type Operation = {
    id: string;
    data: object;
    prev: Operation | null;
    next: Operation | null;
};

type History = {
    topOperation: Operation;
};

type SizeOfObj = {
    width: number,
    height: number,
}

type Char = {
    id: number,
    value: string,
    fontsize: number,
    fontfamily: string,
    color: string,
    background: string,
}

type Coordinates = {
    x: number,
    y: number,
}

type Block = {
    id: number
    coordinates: Coordinates,
    type: 'TextBlock' | 'Image' | 'Primitiv'
    size: SizeOfObj,
}

type Primitiv = Block & {
    type: 'Primitiv'
    data:
    {
        shape: "Triangle" | "Circle" | "Rectangle",
        color: string,
        boldcolor: string,
    }
}

type TextBlock = Block & {
    type: 'TextBlock'
    data: Array<Char>,
    boldcolor: string,
    background: string,
}

type ImageBlock = Block & {
    type: 'Image'
    urldata: string,
}

type Page = {
    elements: Array<TextBlock | ImageBlock | Primitiv>,
    id: number,
}

type Objects = TextBlock | ImageBlock | Primitiv
type Slide = Array<TextBlock | ImageBlock | Primitiv>

type PageInfo = {
    selected: boolean,
    id: string,
    slide: Slide,
    selectObjects: string | null;
} 

type Doc = {
    name: string,
    pages: Array<PageInfo>,
    current: string | null,
}

const textblock: TextBlock = {
    id: 1,
    coordinates: { x: 10, y: 20 },
    type: 'TextBlock',
    boldcolor: '#7BCDE',
    background: 'blue',
    data: [{
        id: 1,
        value: 'h',
        fontsize: 14,
        fontfamily: 'Times New Roman',
        color: '#adfe6f',
        background: '#adfe6f',
    }],
    size: {
        width: 100,
        height: 200,
    }
}

const imageblock: ImageBlock = {
    id: 2,
    coordinates: { x: 10, y: 20 },
    type: 'Image',
    urldata: 'https://UsersImage',
    size: {
        width: 200,
        height: 100,
    }
}

const primitiv: Primitiv = {
    id: 3,
    coordinates: { x: 10, y: 20 },
    type: 'Primitiv',
    data:
    {
        shape: 'Rectangle',
        color: '#7bctA',
        boldcolor: '#7bctA',
    },
    size: {
        width: 200,
        height: 100,
    }
}

const slide1: Slide = [textblock, primitiv, imageblock]

const pageinfo: PageInfo = {
    slide: slide1,
    selected: false,
    id: '1',
    selectObjects: null
}

const doc: Doc = {
    name: 'mypresentation',
    pages: [
        pageinfo
    ],
    current: pageinfo.id,
}
export type {Slide, TextBlock, ImageBlock, Primitiv, Page, Doc, History, Char, PageInfo, Objects, SizeOfObj, Block };
export { textblock, doc };