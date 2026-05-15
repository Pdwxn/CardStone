import { Link } from "react-router-dom";
import Footer from "../components/Layout/footer/Footer";
import Navbar from "../components/Layout/navbar/NavBar";
import Hero from "../components/Layout/body/Hero";

function Homepage() {
  return (
    <>
      <div className="relative min-h-screen overflow-hidden">
        <header className="absolute left-0 top-0 z-20 w-full">
          <Navbar />
        </header>
        <Hero />
      </div>

      <main className="mx-auto mt-14 w-[min(92rem,calc(100%-2rem))]">
        <section className="flex flex-col gap-6 border-l-4 border-amber-300/70 pl-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-300/80">
              Simple, fast, no API key
            </p>
            <h2 className="mt-3 max-w-4xl text-3xl font-black text-white md:text-5xl">
              Card data from HearthstoneJSON. Renders from its art service.
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              Browse collectible cards, filter by core stats, or jump directly
              into a class or expansion without extra visual clutter.
            </p>
          </div>
          <Link
            to="/card-sets"
            className="w-fit rounded-full bg-amber-300 px-5 py-3 font-black text-slate-950 transition hover:bg-amber-200"
          >
            Browse Sets
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Homepage;
