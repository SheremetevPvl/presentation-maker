import {Doc, TextBlock, Page} from '../presentation-maker/Types and examples'

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

const Slide1: Page = [textblock]

const doc: Doc = {
    name: 'mypresentation',
    pages: [
        Slide1
    ],
}