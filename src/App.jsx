import StarryBackground from "./StarryBackground/StarryBackground";

const App = () => {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <StarryBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        <h1>Добро пожаловать в мое приложение!</h1>
      </div>
    </div>
  );
};

export default App;
