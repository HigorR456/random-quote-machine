import { randomQ } from './quotes';

function Search() {
  let indexQ = Math.floor(Math.random() * 7);
  let quote = randomQ[indexQ][0];
  let author = randomQ[indexQ][1];
  console.log('Search');
  return {
    'quote': quote,
    'author': author
  }
}

export { Search };