import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import "./index.css";
import { InfoUserProvider } from "./contexts/InfoUserContext";
import { InfoMobileProvider } from "./contexts/InfoMobileContext";
import EnregistrerTel1 from "./Pages/EnregistrerTel1";
import EnregistrerTel2 from "./Pages/EnregistrerTel2";
import EnregistrerTel3 from "./Pages/EnregistrerTel3";
import ConnectionPage from "./Pages/ConnectionPage";
import ResumeTel from "./Pages/ResumeTel";

function App() {
  return (
    <InfoUserProvider>
      <InfoMobileProvider>
        <Routes>
          <Route path="/" element={<ConnectionPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/enregistrer1" element={<EnregistrerTel1 />} />
          <Route path="/enregistrer2" element={<EnregistrerTel2 />} />
          <Route path="/enregistrer3" element={<EnregistrerTel3 />} />
          <Route path="/resume" element={<ResumeTel />} />
        </Routes>
      </InfoMobileProvider>
    </InfoUserProvider>
  );
}

export default App;
