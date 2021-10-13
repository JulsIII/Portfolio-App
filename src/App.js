import logo from './logo.svg';
import './App.scss';
import Selector from './components/UISelect/RenderSelector';

export default function App () {



  return (
    <div className="App">
      <header className="App-header">
        
        <p>
         Choose...
        </p>
        <Selector />
        {/* <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a> */}
      </header>
    </div>
  );
}

