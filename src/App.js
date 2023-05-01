import { BrowserRouter , Routes , Route } from "react-router-dom";
import Header from "./components/Header";
import Coin from "./components/Coin"
import Coindetails from "./components/Coindetails";
import Exchanages from "./components/Exchanages";
import Footer from "./components/Footer.js"
import "./index.css"




function App() {
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route  path="/" element={<Coin/>}/>
    <Route path="/coin/:id" element={<Coindetails/>} />
    <Route  path="/exchanges" element={<Exchanages />}/>
    
   </Routes>
   <Footer />
   </BrowserRouter>
  );
}

export default App;



