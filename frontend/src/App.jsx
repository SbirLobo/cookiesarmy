import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
import EnregistrerTel1 from "./pages/EnregistrerTel1";
import EnregistrerTel2 from "./pages/EnregistrerTel2";
import EnregistrerTel3 from "./pages/EnregistrerTel3";
import ConnectionPage from "./pages/ConnectionPage";
import ResumeTel from "./pages/ResumeTel";
import TableauSmartphones from "./pages/TableauSmartphones";
import Faq from "./pages/FAQ";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ConnectionPage />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/TableauSmartphones" element={<TableauSmartphones />} />
      <Route path="/FAQ" element={<Faq />} />
      <Route path="/enregistrer1" element={<EnregistrerTel1 />} />
      <Route path="/enregistrer2" element={<EnregistrerTel2 />} />
      <Route path="/enregistrer3" element={<EnregistrerTel3 />} />
      <Route path="/resume" element={<ResumeTel />} />
    </Routes>
  );
}

export default App;
