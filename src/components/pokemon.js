import { createElement, appendContent } from '../lib/dom';

export function createPokemonList(items) {
  // ich bekomme ein Kind und nenne es wie ich will hier nenne ich mein Kind (Was ein Array mit Strings innen ist) einfach mal eingabeDerGefiltertenPokemonAlsArray
  const container = createElement('div', {
    className: 'pokemons'
  });
  items.forEach(item => {
    const element = createElement('div', {
      innerText: item,
      className: 'pokemon'
    });
    appendContent(container, element);
  });
  return container;
}
