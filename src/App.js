import './App.css';
import { Randomize } from './components/random';
import {useState} from 'react';

function App() {
  const [quotes, setQuoteText] = useState(Randomize());
  
  let randArray = quotes;

  const onClickHandler = () => {
    setQuoteText(Randomize());
  };

  return (
    <div id="quote-box">
        <div id="q-box">

          <p id="text">{randArray.q}</p>
          <p id="author">{randArray.a}</p>

          <button id="new-quote" onClick={onClickHandler}>New Quote</button>
          
          <button>
          <a href={`http://twitter.com/intent/tweet?text=${quotes.q}%20${quotes.a}`} id="tweet-quote">Tweet Quote</a>
          </button>
        </div>
      </div>
  )
}

export default App;