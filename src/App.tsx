import React from 'react';
import {doc} from './Minimal data collection';
import Presentation from './components/Document/Document';
import Text from './components/TextBlock/TextBlock';
import './App.css';
import {textblock} from './Minimal data collection';

function App() {
  return (
    <div>
       <Presentation {...doc}/>
       <Text {...textblock}/>
    </div>
  );
}

export default App;
