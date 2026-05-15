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
      <Navbar />
      <main className="mx-auto w-[min(92rem,calc(100%-2rem))]">
        <section className="mb-8 border-l-4 border-amber-300/70 pl-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-300/80">
                Expansion archive
              </p>
              <h1 className="mt-3 text-4xl font-black text-white md:text-6xl">Card Sets</h1>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
                Choose an expansion or adventure to browse cards from that set.
              </p>
            </div>
            <div className="w-full lg:w-auto">
              <label className="mb-2 block text-sm font-bold uppercase tracking-[0.2em] text-slate-300">
                Select a set
              </label>
              <Selector selectedSet={cardSetName} onSetChange={setCardSetName} options={cardSets} />
            </div>
          </div>
        </section>

        {cardSetName ? (
          <CardSetList loading={loading} setLoading={setLoading} setName={cardSetName} />
        ) : (
          <div className="border-t border-white/10 py-12 text-center">
            <h2 className="text-3xl font-black text-white">Choose a set to start browsing</h2>
            <p className="mt-3 text-slate-300">
              The selector above maps friendly expansion names to HearthstoneJSON set ids.
            </p>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}

export default CardSetsPage;
