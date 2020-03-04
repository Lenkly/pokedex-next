import { createElement } from '../lib/dom';
import './title.scss';

export function createTitle() {
  const element = createElement('h1', {
    innerText: 'Pokedex for Professionals',
    className: 'title'
  });
  return element;
}
