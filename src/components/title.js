import { createElement } from '../lib/dom';
import './title.scss';

export function createTitle(value) {
  const element = createElement('h1', {
    innerText: value,
    className: 'title'
  });
  return element;
}
