import HabitCreateModal from "./Components/HabitCreateModal";
import Routes from "./Routes";
import GlobalStyle from "./styles/global"

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Routes />
      <HabitCreateModal/>
    </div>
  );
}

export default App;
