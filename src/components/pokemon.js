import { createElement } from '../lib/dom';

export function pokemons(items) {
  const container = createElement('div', {
    className: 'pokemon'
  });
  items.forEach(item => {
    const element = createElement('div', {
      innerText: item,
      className: 'pokemon'
    });
    container.appendChild(element);
  });
  return container;
}
