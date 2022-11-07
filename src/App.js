import "./App.css";
import CountryPicker from "./components/country-picker";
import Introduction from "./components/Introduction";

function App() {
  return (
    <div className="App">
      <Introduction />
      <CountryPicker />
    </div>
  );
}

export default App;
