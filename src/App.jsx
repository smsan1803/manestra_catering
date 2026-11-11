import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import KiSmoMi from "./pages/KiSmoMi";
import CaNudimo from "./pages/CaNudimo";
import NasaTrpeza from "./pages/NasaTrpeza";
import Kontakt from "./pages/Kontakt";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [lang, setLang] = useState("IST");

  const navigate = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "ki-smo-mi": return <KiSmoMi navigate={navigate} />;
      case "ca-nudimo": return <CaNudimo navigate={navigate} />;
      case "nasa-trpeza": return <NasaTrpeza navigate={navigate} />;
      case "kontakt": return <Kontakt />;
      default: return <Home navigate={navigate} />;
    }
  };

  return (
    <div className="app">
      <Navbar currentPage={currentPage} navigate={navigate} lang={lang} setLang={setLang} />
      {renderPage()}
      <Footer navigate={navigate} />
    </div>
  );
}
