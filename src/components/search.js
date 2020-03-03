import { createElement } from '../lib/dom';
import './search.scss';

export function search() {
  const element = createElement('input', {
    className: 'searchbar',
    type: 'search',
    placeholder: 'Enter Pokemon name'
  });
  return element;
}
