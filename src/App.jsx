import StarryBackground from "./StarryBackground/StarryBackground";

const App = () => {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {/* Звездный фон */}
      <StarryBackground />

      {/* Контент поверх фона */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <h1>Добро пожаловать в мое приложение!</h1>
        <p>Это текст поверх анимации звездного фона.</p>
        {/* Добавь сюда другие компоненты */}
      </div>
    </div>
  );
};

export default App;
