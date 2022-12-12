import './App.css';
import { Search } from './components/random';

let arrayQ = Search();
console.log(arrayQ);

function App() {
  
  return (
    <div id="quote-box">
        <div id="q-box">
        <p id="text">{arrayQ.quote}</p>
        <p id="author">- {arrayQ.author}</p>
        <button id="new-quote" onClick={() => {arrayQ.quote = 'hey'}}>New Quote</button>
        <button>
          <a href="http://twitter.com/intent/tweet" id="tweet-quote">Tweet Quote</a>
        </button>
        </div>
      </div>
  )
}


export default App;
