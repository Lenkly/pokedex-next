import { app } from './app';
import './index.scss';

const elements = app();
elements.forEach(element => {
  document.body.appendChild(element);
});

// elements.forEach(document.body.appendChild); <-- das hier ist das gleiche wie oben, da die Funktion nur übergeben wird, kann sie auch in einer Zeile geschrieben werden
