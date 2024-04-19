import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Employment from "./pages/Employment";
import CarpetCleaning from "./pages/Services-Pages/Carpet-Cleaning";
import CommercialCleaning from "./pages/Services-Pages/Commercial-Cleaning";
import JanitorialServices from "./pages/Services-Pages/Janitorial-Services";
import OfficeCleaning from "./pages/Services-Pages/Office-Cleaning";
import Footer from "./components/Footer";    
    
export default function App() {
  return (
    <>      
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/employment" element={<Employment />} />
          <Route path="/Commercial-Cleaning" element={<CommercialCleaning />} />
          <Route path="/Carpet-Cleaning" element={<CarpetCleaning />} />
          <Route path="/Janitorial-Services" element={<JanitorialServices />} />
          <Route path="/Office-Cleaning" element={<OfficeCleaning />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

