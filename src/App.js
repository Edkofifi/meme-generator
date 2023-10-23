import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Meme from './components/Meme';

// running the notes components here
import Notes from './components/Notes';

function App() {
  return (
    <div className="App">
      <Header/>
      <Meme/>
      <Notes/>
    </div>
  );
}

export default App;
