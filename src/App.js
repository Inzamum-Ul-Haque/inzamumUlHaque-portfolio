import { Toaster } from "react-hot-toast";
import "./App.css";
import Home from "./Components/Home/Home/Home";

function App() {
  return (
    <div className="App">
      <Home />
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
