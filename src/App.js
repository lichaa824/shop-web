import "./App.css";
import RouteSwitch from "./components/RouteSwitch";
import Cart from "./components/Cart"

function App() {
  return (
    <div className="App">
      <Cart />
      <RouteSwitch />
    </div>
  );
}

export default App;
