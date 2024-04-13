import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Employment from "./pages/Employment";
import CarpetCleaning from "./pages/Services-Pages/Carpet-Cleaning";
import CommericalCleaning from "./pages/Services-Pages/Commercial-Cleaning";
import JanitorialServices from "./pages/Services-Pages/Janitorial-Services";
import OfficeCleaning from "./pages/Services-Pages/Office-Cleaning";
import Footer from "./components/Footer";    
    
export default function App(){

    return(
          <>
            <Routes>
                <Route path="/MCC-Rebuild/" element={<Header />}>
                    <Route index element={<Landing/>}/>
                    <Route path="/MCC-Rebuild/about" element={<About/>}/>
                    <Route path="/MCC-Rebuild/contact" element={<Contact/>}/>
                    <Route path="/MCC-Rebuild/employment" element={<Employment/>}/>
                    <Route path="/MCC-Rebuild/Commercial-Cleaning" element={<CommericalCleaning/>}/>
                    <Route path="/MCC-Rebuild/Carpet-Cleaning" element={<CarpetCleaning/>}/>
                    <Route path="/MCC-Rebuild/Janitorial-Services" element={<JanitorialServices/>}/>
                    <Route path="/MCC-Rebuild/Office-Cleaning" element={<OfficeCleaning/>}/>
                </Route>
            </Routes>
        <Footer/>
        </>
    );
}