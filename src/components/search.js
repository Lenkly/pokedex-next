import { createElement } from '../lib/dom';
import './search.scss';

export function createSearch(value) {
  const element = createElement('input', {
    className: 'searchbar',
    type: 'search',
    placeholder: 'Enter Pokemon name',
    value: value //wird über die App.js gesteuert - der sagt, was die value ist
  });
  return element;
}
