import {Doc, TextBlock, Page, Primitiv, ImageBlock} from './Types and examples'

const textblock: TextBlock = {
    id: 1,
    coordinates: {x: 10, y: 20},
    boldcolor: '#7BCDE',
    chars: [
        {
        id: 1,
        value: 'H',
        fontsize: 14,
        fontfamily: 'Times New Roman',
        color: '#adfe6f',
        background: '#adfe6f',
       },
       {
        id: 2,
        value: 'I',
        fontsize: 14,
        fontfamily: 'Times New Roman',
        color: '#adfe6f',
        background: '#adfe6f',
       }
    ],
}

const imageblock: ImageBlock ={
    id: 2,
    coordinates: {x: 30, y: 20},
    data: 'https://UsersImage',
    type: 'image',
}

const primitiv: Primitiv = {
    id: 3,
    coordinates: {x: 20, y: 20},
    shape: 'Rectangle',
    color: '#7bctA',
    width: 12,
    height: 14,
    boldcolor: '#7bctA',
}

const Slide1: Page = {
    elements: [textblock, primitiv, imageblock],
    id: 1,
}

const doc: Doc = {
    name: 'mypresentation',
    pages: [
        Slide1
    ],
}