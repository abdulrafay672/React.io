import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './component/Home';
import About from './component/about';
import Contact from './component/contact';
import Header from "./component/header";
function App() {
  return (
    <BrowserRouter>
      <div>
        
      {/* <Contact /> */}
        <Routes>

        <Route path="/contact" element={<Contact />} > Contact  </Route>
        <Route path="/" element={<Header />} /> 

        <Route path="/Home" element={<Home />} />

        <Route path="/about" element={<About />} />

        </Routes>
   
    </div>
</BrowserRouter >
  );
}

export default App;
