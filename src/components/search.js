import { createElement } from '../lib/dom';
import './search.scss';

export function createSearchInput() {
  const element = createElement('input', {
    className: 'searchbar',
    type: 'search',
    placeholder: 'Enter Pokemon name'
  });
  return element;
}
