import React from 'react';
import {doc} from './Minimal data collection';
import Presentation from './components/Document/Document';
import './App.css';

function App() {
  return (
    <div>
       <Presentation {...doc}/>
    </div>
  );
}

export default App;
