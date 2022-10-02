import "./App.css";
import Home from "./Component/Home";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import EventDetail from "./Component/EventDetail";
import Confirmation from "./Component/Confirmation";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eventDetail" element={<EventDetail />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </div>
  );
}

export default App;
