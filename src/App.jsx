import './App.css';

function App() {
  // Императивный стиль: получение текущего года через явный вызов методов
  const currentYear = new Date().getFullYear();

  // Декларативный стиль: описание того, что должно быть отображено в интерфейсе
  return (
    <div className="App">
      <h1>Vite + React</h1>
      <div className="card">
        <p>Welcome to the React app created with Vite!</p>
        <p>Текущий год: {currentYear}</p> {/* Декларативный стиль: динамическое отображение текущего года */}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more.
      </p>
    </div>
  );
}

export default App;
