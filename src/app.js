import { createElement } from './lib/dom';
import { title } from './components/title';
import { search } from './components/search';
import { pokemons } from './components/pokemon';

const allPokemon = ['Bisasam', 'Glumanda', 'Schiggy', 'Pikachu', 'Evoli'];

export function app() {
  const header = createElement('header', {
    className: 'header'
  });
  const main = createElement('main', {
    className: 'main'
  });
  const titleElement = title('The next-gen Pokedex');
  const searchElement = search();

  header.appendChild(titleElement);
  main.appendChild(searchElement);

  const searchResults = createElement('div', {}); // neues Element mit Zugriff auf ein Element, das man leeren kann
  main.appendChild(searchResults);

  searchElement.addEventListener('input', event => {
    searchResults.innerHTML = ''; //durch diese Eingabe wird das Ergebnis gelöscht

    const searchValue = event.target.value; //neue Variable

    const filteredPokemon = allPokemon.filter(pokemon => {
      return pokemon.startsWith(searchValue); //hier wird Pokemon gefiltert anhand der Eingabe
    });
    const pokeNames = pokemons(filteredPokemon); //neues Element wird hinzugefügt, wird definiert in der pokemons-Funktion
    searchResults.appendChild(pokeNames);

    console.log(searchValue, filteredPokemon);
  });

  return [header, main];
}

/*searchElement.addEventListener('search', event => {
    const searchResult = createElement('p', {
      innerText: searchElement.value
    });
    main.appendChild(searchResult);
  console.log(event.target.value); }); */

/*const pokeNames = pokemons(allPokemon);
  main.appendChild(pokeNames);*/
