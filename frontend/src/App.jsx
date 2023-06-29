import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
import EnregistrerTel1 from "./pages/EnregistrerTel1";
import EnregistrerTel2 from "./pages/EnregistrerTel2";
import EnregistrerTel3 from "./pages/EnregistrerTel3";
import ConnectionPage from "./pages/ConnectionPage";
import ResumeTel from "./pages/ResumeTel";
import { CurrentFormProvider } from "./components/CurrentFormContext";
import Inscription from "./pages/Inscription";

function App() {
  return (
    <CurrentFormProvider>
      <Routes>
        <Route path="/" element={<ConnectionPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/enregistrer1" element={<EnregistrerTel1 />} />
        <Route path="/enregistrer2" element={<EnregistrerTel2 />} />
        <Route path="/enregistrer3" element={<EnregistrerTel3 />} />
        <Route path="/resume" element={<ResumeTel />} />
        <Route path="/inscription" element={<Inscription />} />
      </Routes>
    </CurrentFormProvider>
  );
}

export default App;
