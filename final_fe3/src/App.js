import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { ContextProvider } from "./Components/utils/global.context";
import "./App.css";


function App() {
  return (
    <BrowserRouter>
        <ContextProvider>
        <Navbar/>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/contact" element={ <Contact/> } />
          <Route path="/detail/:id" element={ <Detail/> } />
          <Route path="/favs" element={ <Favs/> } />
        </Routes>
        </ContextProvider>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
