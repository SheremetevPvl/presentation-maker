import {Doc, TextBlock, Page, Char} from './Types and examples'
export {textblock, doc};

const Char1: Char = {
    id: 1,
    value: 'H',
    fontsize: 14,
    fontfamily: 'Times New Roman',
    color: '#adfe6f',
    background: '#adfe6f',
}

const Char2: Char = {
    id: 2,
    value: 'I',
    fontsize: 14,
    fontfamily: 'Times New Roman',
    color: '#adfe6f',
    background: '#adfe6f',
}

const textblock: TextBlock = {
    id: 1,
    coordinates: {x: 10, y: 20},
    boldcolor: '#7BCDE',
    chars: [
        Char1, Char2
    ],
}

const Slide1: Page = {
    elements: [textblock],
    id: 1,
}

const doc: Doc = {
    name: 'mypresentation',
    pages: [
        Slide1
    ],
}