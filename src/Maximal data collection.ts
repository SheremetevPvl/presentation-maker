import { Doc, TextBlock, Page, Primitiv, ImageBlock, Slide, PageInfo } from './Types and examples'

const textblock: TextBlock = {
    id: 1,
    coordinates: { x: 10, y: 20 },
    boldcolor: '#7BCDE',
    background: 'blue',
    data: [
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
    type: 'TextBlock',
}

const imageblock: ImageBlock = {
    id: 2,
    coordinates: { x: 30, y: 50 },
    urldata: './logo192.png',
    type: 'Image',
    width: 200,
    height: 100,
}

const primitiv: Primitiv = {
    id: 3,
    coordinates: { x: 20, y: 20 },
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

const textblock1: TextBlock = {
    id: 4,
    coordinates: { x: 10, y: 20 },
    boldcolor: 'black',
    background: 'blue',
    data: [
        {
            id: 1,
            value: 'B',
            fontsize: 14,
            fontfamily: 'sans-serif',
            color: 'black',
            background: '#adfe6f',
        },
        {
            id: 2,
            value: 'A',
            fontsize: 14,
            fontfamily: 'sans-serif',
            color: 'black',
            background: '#adfe6f',
        }
    ],
    type: 'TextBlock',
}

const imageblock1: ImageBlock = {
    id: 5,
    coordinates: { x: 30, y: 20 },
    urldata: './logo512.png',
    type: 'Image',
    width: 200,
    height: 100,
}

const primitiv1: Primitiv = {
    id: 6,
    coordinates: { x: 20, y: 20 },
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

const Slide1: Page = {
    elements: [textblock, primitiv, imageblock],
    id: 1,
}
const Slide2: Page = {
    elements: [textblock1, primitiv1, imageblock1],
    id: 2,
}
const slide1: Slide = [textblock, primitiv, imageblock]
const slide2: Slide = [textblock1, primitiv1, imageblock1]
const pageinfo1: PageInfo = {
    slide: slide1,
    selected: false,
}
const pageinfo2: PageInfo = {
    slide: slide2,
    selected: false,
}

const doc: Doc = {
    name: 'mypresentation',
    pages: [
        pageinfo1, pageinfo2,
    ],
    current: pageinfo1
}
export  { doc };