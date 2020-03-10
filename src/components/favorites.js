import './favorites.scss';
import { createElement, appendContent } from '../lib/dom';

export function createFavorites(completeTeam) {
  const teamFavorite = createElement('section', {
    className: 'favorites'
  });
  completeTeam.items.forEach(item => {
    const favorite = createElement('div', {
      innerText: item,
      className: 'favorite'
    });
    appendContent(teamFavorite, favorite);
  });
  return teamFavorite;
}
