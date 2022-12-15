import { quotesArray } from './quotes';

function Randomize() {
  let index = Math.floor(Math.random() * 7);
  let quote = quotesArray[index][0];
  let author = quotesArray[index][1];
  return {
    q: `${quote}`,
    a: `${author}`
  }
}

export { Randomize };