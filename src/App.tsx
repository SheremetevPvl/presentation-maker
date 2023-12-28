import ShowDocument from './components/Document/Document';
import PresentationProvider from "./components/context/context";
import './App.css';

function App() {
  return (
    <div>
      <PresentationProvider>
        <ShowDocument />
      </PresentationProvider>
    </div>
  );
}

export default App;
