export type {TextBlock, ImageBlock, Primitiv, Page, Doc, History, Char};
export {textblock};


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
}

type Primitiv = Block& {
    shape: "Triangle" | "Ellipse" | "Rectangle",
    color: string,
    width: number,  
    height: number,
    boldcolor: string,
}

type TextBlock = Block& {
    chars: Array<Char>,
    boldcolor: string, 
}

type ImageBlock = Block& { 
    data: string,
    type: 'image',
}

type Page = {
    elements: Array<TextBlock|ImageBlock|Primitiv>,
    id: number,
}
type Doc = {
    name: string,
    pages: Array<Page>
}

const textblock: TextBlock = {
    id: 1,
    coordinates: {x: 10, y: 20},
    boldcolor: '#7BCDE',
    chars: [{
        id: 1,
        value: 'h',
        fontsize: 14,
        fontfamily: 'Times New Roman',
        color: '#adfe6f',
        background: '#adfe6f',
    }],
}

const imageblock: ImageBlock ={
    id: 2,
    coordinates: {x: 10, y: 20},
    data: 'https://UsersImage',
    type: 'image',
}

const primitiv: Primitiv = {
    id: 3,
    coordinates: {x: 10, y: 20},
    shape: 'Rectangle',
    color: '#7bctA',
    width: 12,
    height: 14,
    boldcolor: '#7bctA',
}

const page: Page = {
    elements: [textblock, primitiv, imageblock],
    id: 1,
}

const doc: Doc = {
    name: 'mypresentation',
    pages: [
        page
    ],
}