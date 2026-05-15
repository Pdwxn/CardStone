import { useState } from "react";
import CardList from "../components/content/CardList";
import Navbar from "../components/Layout/navbar/NavBar";
import Footer from "../components/Layout/footer/Footer";

function AllCardsPage() {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <>
      <Navbar />
      <main className="mx-auto w-[min(92rem,calc(100%-2rem))]">
        <section className="mb-8 border-l-4 border-amber-300/70 pl-6">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-300/80">
            Collection browser
          </p>
          <h1 className="mt-3 text-4xl font-black text-white md:text-6xl">All Cards</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
            Scan the full collectible card library, filter by core stats, and
            move through pages without losing your place.
          </p>
        </section>
        <CardList loading={loading} setLoading={setLoading} />
      </main>
      <Footer />
    </>
  );
}

export default AllCardsPage;
