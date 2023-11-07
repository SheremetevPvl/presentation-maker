export type {Slide, TextBlock, ImageBlock, Primitiv, Page, Doc, History, Char, PageInfo, Objects };
export { textblock, doc };


type Operation = {
    id: string;
    data: object;
    prev: Operation | null;
    next: Operation | null;
};

type History = {
    topOperation: Operation;
};

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
}

type Primitiv = Block & {
    type: 'Primitiv'
    data:
    {
        shape: "Triangle" | "Ellipse" | "Rectangle",
        color: string,
        width: number,
        height: number,
        boldcolor: string,
    }
}

type TextBlock = Block & {
    type: 'TextBlock'
    data: Array<Char>,
    boldcolor: string,
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
    slide: Slide,
} 

type Doc = {
    name: string,
    pages: Array<PageInfo>,
    current: PageInfo,
}

const textblock: TextBlock = {
    id: 1,
    coordinates: { x: 10, y: 20 },
    type: 'TextBlock',
    boldcolor: '#7BCDE',
    data: [{
        id: 1,
        value: 'h',
        fontsize: 14,
        fontfamily: 'Times New Roman',
        color: '#adfe6f',
        background: '#adfe6f',
    }],
}

const imageblock: ImageBlock = {
    id: 2,
    coordinates: { x: 10, y: 20 },
    type: 'Image',
    urldata: 'https://UsersImage',

}

const primitiv: Primitiv = {
    id: 3,
    coordinates: { x: 10, y: 20 },
    type: 'Primitiv',
    data:
    {
        shape: 'Rectangle',
        color: '#7bctA',
        width: 12,
        height: 14,
        boldcolor: '#7bctA',
    }
}

const page: Page = {
    elements: [textblock, primitiv, imageblock],
    id: 1,
}

const slide1: Slide = [textblock, primitiv, imageblock]

const pageinfo: PageInfo = {
    slide: slide1,
    selected: false,
}

const doc: Doc = {
    name: 'mypresentation',
    pages: [
        pageinfo
    ],
    current: pageinfo
}