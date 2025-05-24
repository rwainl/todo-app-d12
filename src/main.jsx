import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Tentang from "./pages/Tentang.jsx";
import "./index.css";
import { ThemeProvider } from "./components/ThemeContext.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Tentang" element={<Tentang />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
