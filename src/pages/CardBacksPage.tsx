import { useState } from "react";
import Navbar from "../components/Layout/navbar/NavBar";
import Footer from "../components/Layout/footer/Footer";
import CardBackList from "../components/content/CardBackList";

function CardBacksPage() {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <>
      <Navbar />
      <main className="mx-auto w-[min(92rem,calc(100%-2rem))]">
        <section className="mb-8 border-l-4 border-amber-300/70 pl-6">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-300/80">
            Collection status
          </p>
          <h1 className="mt-3 text-4xl font-black text-white md:text-6xl">Card Backs</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
            This page remains available as a clear product state while card back data is unavailable.
          </p>
        </section>
        <CardBackList loading={loading} setLoading={setLoading} />
      </main>
      <Footer />
    </>
  );
}

export default CardBacksPage;
