import { Routes, Route } from "react-router-dom";

import Page404 from "./pages/Page404";

import Home from "./Pages/Home";
import "./index.css";
import EnregistrerTel1 from "./Pages/EnregistrerTel1";
import EnregistrerTel2 from "./Pages/EnregistrerTel2";
import EnregistrerTel3 from "./Pages/EnregistrerTel3";
import ConnectionPage from "./Pages/ConnectionPage";
import ResumeTel from "./Pages/ResumeTel";

function App() {
  return (
    <Routes>

      <Route path="*" element={<Page404 />} />

      <Route path="/" element={<ConnectionPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/enregistrer1" element={<EnregistrerTel1 />} />
      <Route path="/enregistrer2" element={<EnregistrerTel2 />} />
      <Route path="/enregistrer3" element={<EnregistrerTel3 />} />
      <Route path="/resume" element={<ResumeTel />} />

    </Routes>
  );
}

export default App;
