import { Doc, TextBlock, Primitiv, ImageBlock, Slide, PageInfo } from './Types and examples'

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
    size: {
        width: 100,
        height: 100,
    }
}

const imageblock: ImageBlock = {
    id: 2,
    coordinates: { x: 30, y: 50 },
    urldata: './logo192.png',
    type: 'Image',
    size: {
        width: 200,
        height: 100,
    }  
}

const primitiv: Primitiv = {
    id: 3,
    coordinates: { x: 100, y: 100 },
    type: 'Primitiv',
    data:
    {
        shape: 'Rectangle',
        color: 'blue',
        boldcolor: 'black',
    },
    size: {
        width: 100,
        height: 200,
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
    size: {
        width: 100,
        height: 100,
    }
}

const imageblock1: ImageBlock = {
    id: 5,
    coordinates: { x: 30, y: 20 },
    urldata: './logo512.png',
    type: 'Image',
    size: {
        width: 200,
        height: 100,
    }
}

const primitiv1: Primitiv = {
    id: 6,
    coordinates: { x: 100, y: 100 },
    type: 'Primitiv',
    data:
    {
        shape: 'Circle',
        color: 'blue',
       
        boldcolor: 'black',
    },
    size: {
        width: 50,
        height: 50,
    }
}

const primitiv2: Primitiv = {
    id: 7,
    coordinates: { x: 100, y: 300 },
    type: 'Primitiv',
    data:
    {
        shape: 'Triangle',
        color: 'blue', 
        boldcolor: 'black',
    },
    size: {
        width: 100,
        height: 200,
    }
}

const slide1: Slide = [textblock, primitiv2, imageblock]
const slide2: Slide = [textblock1, primitiv1, imageblock1]
const slide3: Slide = [primitiv]

const pageinfo1: PageInfo = {
    slide: slide1,
    selected: false,
    id: '1',
    selectObjects: null,
}
const pageinfo2: PageInfo = {
    slide: slide2,
    selected: true,
    id: '2',
    selectObjects: null,
}

const pageinfo3: PageInfo = {
    slide: slide3,
    selected: true,
    id: '3',
    selectObjects: null,
}

const doc: Doc = {
    name: 'mypresentation',
    pages: [
        pageinfo1, pageinfo2, pageinfo3
    ],
    current: pageinfo1.id,
}
export  { doc };