import './pokemon.scss';
import { createElement, appendContent } from '../lib/dom';

export function createPokemonList(pokis) {
  const container = createElement('div', {
    className: 'pokemons'
  });
  pokis.items.forEach(item => {
    const element = createElement('div', {
      innerText: item,
      className: 'pokemon'
    });
    element.addEventListener('click', () => {
      pokis.onSearchResultClick(item);
    });
    appendContent(container, element);
    console.log('halts maul', element);
  });
  return container;
}
