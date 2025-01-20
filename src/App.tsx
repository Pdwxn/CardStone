import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Homepage = lazy(() => import("./pages/Homepage"));
const AllCardsPage = lazy(() => import("./pages/AllCardsPage"));
const CardBacksPage = lazy(() => import("./pages/CardBacksPage"));
const CardSetsPage = lazy(() => import("./pages/CardSetsPage"));
const ClassesPage = lazy(() => import("./pages/ClassesPage"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/all-cards" element={<AllCardsPage />} />
        <Route path="/all-cardbacks" element={<CardBacksPage />} />
        <Route path="/card-sets" element={<CardSetsPage />} />
        <Route path="/classes" element={<ClassesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
