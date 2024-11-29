import { lazy, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardBacksPage from "./pages/CardBacksPage";

const Homepage = lazy(() => import("./pages/Homepage"));
const AllCardsPage = lazy(() => import("./pages/AllCardsPage"))

function App() {
  const [query, setQuery] = useState<string>("");

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage query={query} setQuery={setQuery} />} />
        <Route path="/all-cards" element={<AllCardsPage query={query} setQuery={setQuery} />} />
        <Route path="/card-sets" element={0} />
        <Route path="/all-cardbacks" element={<CardBacksPage query={query} setQuery={setQuery} />} />
        <Route path="/classes" element={0} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
