import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import CardPage from "./pages/CardPage";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <Router basename="/renzan-store">
      <Routes>
        <Route path="/" element={<CardPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
