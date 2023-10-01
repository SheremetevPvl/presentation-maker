import {Doc, TextBlock, Page, Primitiv, ImageBlock} from '../presentation-maker/Types and examples'

const textblock: TextBlock = {
    id: 1,
    coordinates: {x: 10, y: 20},
    boldcolor: '#7BCDE',
    chars: [
        {
        value: 'H',
        fontsize: 14,
        fontfamily: 'Times New Roman',
        color: '#adfe6f',
        background: '#adfe6f',
       },
       {
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
    length: 12,
    height: 14,
    BoldColor: '#7bctA',
}

const Slide1: Page = [textblock, primitiv, imageblock]

const doc: Doc = {
    name: 'mypresentation',
    pages: [
        Slide1
    ],
}