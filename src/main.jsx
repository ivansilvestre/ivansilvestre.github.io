import { ThemeProvider } from "next-themes";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import Gallery from "./Gallery.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider attribute="class" defaultTheme="dark">
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  </StrictMode>
);
