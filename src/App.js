import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Contact component
import Home from './pages/Home'
import Contact from './pages/Contact'
import { github, slack, zuri, I4G, hero } from "./assets";

import "./App.scss";

function App() {
  return (

   <>
     <Router>
        <Routes>
       
          <Route exact path="/" element={<Home />} />          
          <Route path="/contact" element={<Contact />} />
          {/* <Navigate to="/" replace="/" /> */}
        </Routes>
      </Router>
   </>
  );
}

export default App;

