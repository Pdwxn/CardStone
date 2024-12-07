import { lazy, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getSearchSuggestions } from "./services/api/hs-api";

const Homepage = lazy(() => import("./pages/Homepage"));
const AllCardsPage = lazy(() => import("./pages/AllCardsPage"));
const CardDetailPage = lazy(() => import("./pages/CardDetailPage") )
const CardBacksPage = lazy(() => import("./pages/CardBacksPage"));
const CardSetsPage = lazy(() => import("./pages/CardSetsPage"));
const ClassesPage = lazy(() => import("./pages/ClassesPage"));

function App() {
  const [query, setQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      const suggestions = await getSearchSuggestions(query);
      setSuggestions(suggestions);
      console.log("Suggestions:", suggestions);
    };
    fetchSuggestions();
  }, [query]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <Homepage
              query={query}
              setQuery={setQuery}
              suggestions={suggestions}
              setSuggestions={setSuggestions}
            />
          }
        />
        <Route
          path="/all-cards"
          element={
            <AllCardsPage
              query={query}
              setQuery={setQuery}
              suggestions={suggestions}
              setSuggestions={setSuggestions}
            />
          }
        />
        <Route
          path={`/card/${query}`}
          element={
            <CardDetailPage
              query={query}
              setQuery={setQuery}
              suggestions={suggestions}
              setSuggestions={setSuggestions}
            />
          }
        />
        <Route
          path="/all-cardbacks"
          element={
            <CardBacksPage
              query={query}
              setQuery={setQuery}
              suggestions={suggestions}
              setSuggestions={setSuggestions}
            />
          }
        />
        <Route
          path="/card-sets"
          element={
            <CardSetsPage
              query={query}
              setQuery={setQuery}
              suggestions={suggestions}
              setSuggestions={setSuggestions}
            />
          }
        />
        <Route
          path="/classes"
          element={
            <ClassesPage
              query={query}
              setQuery={setQuery}
              suggestions={suggestions}
              setSuggestions={setSuggestions}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
