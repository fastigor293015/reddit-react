import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from '../App';

// Т.к. впоследствии мы будем добавлять сюда Server-Side Rendering,
// нам необходимо, чтобы эта часть кода срабатывала только в браузере
window.addEventListener('load', () => {
  // 2 параметра:
  // 1) Компонент, с которого начинается приложение;
  // 2) Элемент, в который будет монтироваться всё, что мы написали на Реакте;
  // ReactDOM.render(<Header />, document.getElementById('react_root'));
  ReactDOM.hydrate(<App />, document.getElementById('react_root'));
})
