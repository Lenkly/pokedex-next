import { createElement, appendContent } from './lib/dom';
import { createTitle } from './components/title';
import { createSearchInput } from './components/search';
import { createPokemonList } from './components/pokemon';
import { createFavorites } from './components/favorites';
import { filterPokemons } from './lib/pokemonlist';
import pokeball from './assets/pokeballAnimated.gif';

function refreshLocalStorage(item) {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || []; // localStorage kann entweder ein Array sein oder ein String

  if (!favorites.includes(item)) {
    //wenn die Favorites das item nicht enthalten, dann soll es inkludiert werden
    favorites.push(item);
  } else {
    const itemIndex = favorites.indexOf(item);
    favorites.splice(itemIndex, 1); //mit splice wird das favorite, das schon ausgewählt wurde, wieder entfernt
  }
  if (favorites.length > 6) {
    favorites = favorites.slice(1);
  }
  const favoriteJSON = JSON.stringify(favorites);
  localStorage.setItem('favorites', favoriteJSON);
}

export function app() {
  const header = createElement('header', {
    className: 'header'
  });
  const main = createElement('main', {
    className: 'main'
  });
  const title = createTitle('Pokedex for Professionals');
  const searchInput = createSearchInput({
    value: sessionStorage.getItem('searchValue')
  });

  const favoritesContainer = createElement('div');
  let favorites = createFavorites({
    items: JSON.parse(localStorage.getItem('favorites')) || []
  });
  appendContent(favoritesContainer, favorites);

  function handleSearchResultClick(item) {
    refreshLocalStorage(item);
    favoritesContainer.removeChild(favorites);
    favorites = createFavorites({
      items: JSON.parse(localStorage.getItem('favorites')) || []
    });
    appendContent(favoritesContainer, favorites);
  }
  let searchResults = null;
  async function setSearchResults() {
    const loading = createElement('img', {
      src: pokeball
    });
    appendContent(main, loading);
    const filteredPokemons = await filterPokemons(searchInput.value);
    searchResults = createPokemonList({
      items: filteredPokemons,
      onSearchResultClick: handleSearchResultClick
    });
    appendContent(main, searchResults);
    main.removeChild(loading);
  }
  setSearchResults();

  appendContent(header, title);
  appendContent(main, [searchInput]);

  searchInput.addEventListener('input', event => {
    main.removeChild(searchResults);
    setSearchResults();

    const searchValue = event.target.value.toLowerCase();
    sessionStorage.setItem('searchValue', searchValue);
    /*console.log('searchValue: ', searchValue); //immer mal Ausgaben machen, um zu sehen, wo die Fehler auftauchen
    const filteredPokemon = allPokemon.filter(
      pokemon => {
        return pokemon.toLowerCase().startsWith(searchValue);
      } //hier wird Pokemon gefiltert anhand der Eingabe
    );

    searchResults = createPokemonList(filteredPokemon);
    appendContent(main, searchResults); */
  });

  return [header, favoritesContainer, main]; //sorgt dafür, dass alles ausgegben wird
}
