import './App.css';
import React from 'react';

function App() {
  // Императивный стиль: получение текущего года
  const currentYear = new Date().getFullYear();

  // Декларативный стиль: создание интерфейса через React.createElement
  return React.createElement(
    'div',
    { className: 'App' },
    React.createElement('h1', null, 'Vite + React'),
    React.createElement(
      'div',
      { className: 'card' },
      React.createElement('p', null, 'Welcome to the React app created with Vite!'),
      React.createElement('p', null, `Текущий год: ${currentYear}`) // Декларативное отображение года
    ),
    React.createElement(
      'p',
      { className: 'read-the-docs' },
      'Click on the Vite and React logos to learn more.'
    )
  );
}

export default App;
