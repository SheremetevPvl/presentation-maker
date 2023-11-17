

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
        shape: "Triangle" | "Circle" | "Rectangle",
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
    background: string,
}

type ImageBlock = Block & {
    type: 'Image'
    urldata: string,
    width: number,
    height: number,
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
} 

type Doc = {
    name: string,
    pages: Array<PageInfo>,
    current: PageInfo,
    selectSlides: Array<PageInfo>,
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
}

const imageblock: ImageBlock = {
    id: 2,
    coordinates: { x: 10, y: 20 },
    type: 'Image',
    urldata: 'https://UsersImage',
    width: 200,
    height: 100,
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

const slide1: Slide = [textblock, primitiv, imageblock]

const pageinfo: PageInfo = {
    slide: slide1,
    selected: false,
    id: '1',
}

const doc: Doc = {
    name: 'mypresentation',
    pages: [
        pageinfo
    ],
    current: pageinfo,
    selectSlides: [pageinfo],
}
export type {Slide, TextBlock, ImageBlock, Primitiv, Page, Doc, History, Char, PageInfo, Objects };
export { textblock, doc };
