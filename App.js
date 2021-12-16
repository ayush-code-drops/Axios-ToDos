import "./styles.css";
import ToDo from "./components/ToDo";
import Header from "./components/Header";
export default function App() {
  return (
    <div className="App">
      <Header title="TODO" />
      <ToDo />
    </div>
  );
}
