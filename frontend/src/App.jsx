import "./index.css";
import EnregistrerTel2 from "./services/Pages/EnregistrerTel2";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <EnregistrerTel2 />
    </Routes>


export default App;
