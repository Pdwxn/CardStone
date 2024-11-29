import { lazy, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Homepage = lazy(() => import("./pages/Homepage"));

function App() {
  const [query, setQuery] = useState<string>("");

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage query={query} setQuery={setQuery} />} />
        <Route path="/all-cards" element={0} />
        <Route path="/card-sets" element={0} />
        <Route path="/all-cardbacks" element={0} />
        <Route path="/classes" element={0} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
