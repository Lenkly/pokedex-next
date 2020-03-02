import { createElement } from '../lib/dom';
/*
export function title() {
  const titleAttributes = {
    innerText: 'The next-gen Pokedex',
    className: 'title'
  };
  const element = createElement('h1', titleAttributes);

  return element;
} */

export function title() {
  const element = document.createElement('h1', {
    innerText: 'Pokedex for professionals',
    className: 'title'
  });
  return element;
}
