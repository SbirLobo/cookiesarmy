import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
import EnregistrerTel1 from "./pages/EnregistrerTel1";
import EnregistrerTel2 from "./pages/EnregistrerTel2";
import EnregistrerTel3 from "./pages/EnregistrerTel3";
import ConnectionPage from "./pages/ConnectionPage";
import ResumeTel from "./pages/ResumeTel";
import Page404 from "./pages/Page404";
import { InfoUserProvider } from "./contexts/InfoUserContext";
import { InfoMobileProvider } from "./contexts/InfoMobileContext";
import Inscription from "./pages/Inscription";
import TableauSmartphones from "./pages/TableauSmartphones";
import Faq from "./pages/FAQ";
import Smartphone from "./pages/Smartphone";
import UserProfile from "./pages/ProfileUser";
import ModifTel from "./pages/ModifTel";

function App() {
  return (
    <InfoUserProvider>
      <InfoMobileProvider>
        <Routes>
          <Route path="/" element={<ConnectionPage />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/enregistrer1" element={<EnregistrerTel1 />} />
          <Route path="/enregistrer2" element={<EnregistrerTel2 />} />
          <Route path="/enregistrer3" element={<EnregistrerTel3 />} />
          <Route path="/resume" element={<ResumeTel />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/TableauSmartphones" element={<TableauSmartphones />} />
          <Route path="/ProfileUser" element={<UserProfile />} />
          <Route path="/FAQ" element={<Faq />} />
          <Route path="/smartphone" element={<Smartphone />} />
          <Route path="*" element={<Page404 />} />
          <Route path="/modifier" element={<ModifTel />} />
        </Routes>
      </InfoMobileProvider>
    </InfoUserProvider>
  );
}

export default App;
