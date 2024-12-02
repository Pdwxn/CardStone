import { lazy, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Homepage = lazy(() => import("./pages/Homepage"));
const AllCardsPage = lazy(() => import("./pages/AllCardsPage"))
const CardBacksPage = lazy(() => import("./pages/CardBacksPage"))
const CardSetsPage = lazy(() => import("./pages/CardSetsPage"))
const ClassesPage = lazy(() => import("./pages/ClassesPage"))

function App() {
  const [query, setQuery] = useState<string>("");

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage query={query} setQuery={setQuery} />} />
        <Route path="/all-cards" element={<AllCardsPage query={query} setQuery={setQuery} />} />
        <Route path="/all-cardbacks" element={<CardBacksPage query={query} setQuery={setQuery} />} />
        <Route path="/card-sets" element={<CardSetsPage query={query} setQuery={setQuery} />} />
        <Route path="/classes" element={<ClassesPage query={query} setQuery={setQuery} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
