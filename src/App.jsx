import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import WebDevelopment from "./pages/WebDevelopment";
import CyberSecurity from "./pages/CyberSecurity";
import Projects from "./pages/Projects";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/web-development"
        element={<WebDevelopment />}
      />

      <Route
        path="/cyber-security"
        element={<CyberSecurity />}
      />

      <Route
        path="/projects"
        element={<Projects />}
      />

      
    </Routes>
  );
}

export default App;