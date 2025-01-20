import { useState } from "react";
import Navbar from "../components/Layout/navbar/NavBar";
import Footer from "../components/Layout/footer/Footer";
import CardSetList from "../components/content/CardSetList";
import cardSets from "../components/options/cardSet";
import Selector from "../components/Selector";

function CardSetsPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const [cardSetName, setCardSetName] = useState<string>("");

  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <div className="ml-[6rem] mr-[6rem]">
        <div className="flex flex-wrap object-center gap-15 justify-between items-center">
          <h1 className="mb-8 text-4xl text-slate-50 font-semibold">
            Card Sets
          </h1>
          <div className="mb-8 flex flex-wrap items-center gap-4">
            <label className="text-lg text-slate-50">Select a Card Set: </label>
            <Selector
            selectedSet={cardSetName}
            onSetChange={setCardSetName}
            options={cardSets}
          />
          </div>
        </div>
        {cardSetName && (
        <CardSetList
          loading={loading}
          setLoading={setLoading}
          setName={cardSetName}
        />
      )}
      </div>
      <Footer />
    </>
  );
}

export default CardSetsPage;
