export {TextBlock, ImageBlock, Primitiv, Page, Doc};

//механизм командной консоли

type Command = () => void;

function ExecuteCommand(command: Command): Command {
    command();
    return () => {
      // отменить выполнение команды
    };
  }

const command = () => {
    console.log('Выполненна команда...');
};

const UndoCommand = ExecuteCommand(command);

 
type Char = {
    value: string,
    fontsize: Number,
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
    shape: string,
    color: string,
    length: Number,  
    height: Number,
    BoldColor: string,
}

type TextBlock = Block& {
    chars: Array<Char>,
    boldcolor: string, 
}

type ImageBlock = Block& { 
    data: string,
    type: 'image',
}

type Page = Array<TextBlock|ImageBlock|Primitiv>

type Doc = {
    name: string,
    pages: Array<Page>
}

const textblock: TextBlock = {
    id: 1,
    coordinates: {x: 10, y: 20},
    boldcolor: '#7BCDE',
    chars: [{
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
    length: 12,
    height: 14,
    BoldColor: '#7bctA',
}

const doc: Doc = {
    name: 'mypresentation',
    pages: [
        [textblock, imageblock, primitiv]
    ],
}

