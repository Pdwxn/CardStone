import { useState } from "react";
import Navbar from "../components/Layout/navbar/NavBar";
import Footer from "../components/Layout/footer/Footer";
import CardClassesList from "../components/content/CardClassesList";
import Selector from "../components/Selector";
import classes from "../components/options/classes";

function ClassesPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const [cardClassName, setCardClassName] = useState<string>("");

  return (
    <>
      <Navbar />
      <main className="mx-auto w-[min(92rem,calc(100%-2rem))]">
        <section className="mb-8 border-l-4 border-amber-300/70 pl-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-300/80">
                Class identity
              </p>
              <h1 className="mt-3 text-4xl font-black text-white md:text-6xl">Classes</h1>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
                Pick a hero class to explore its cards, class mechanics, and stat curves.
              </p>
            </div>
            <div className="w-full lg:w-auto">
              <label className="mb-2 block text-sm font-bold uppercase tracking-[0.2em] text-slate-300">
                Select a class
              </label>
              <Selector selectedSet={cardClassName} onSetChange={setCardClassName} options={classes} />
            </div>
          </div>
        </section>

        {cardClassName ? (
          <CardClassesList loading={loading} setLoading={setLoading} setClass={cardClassName} />
        ) : (
          <div className="border-t border-white/10 py-12 text-center">
            <h2 className="text-3xl font-black text-white">Choose a class to start browsing</h2>
            <p className="mt-3 text-slate-300">
              Friendly class names are mapped to HearthstoneJSON class ids behind the scenes.
            </p>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}

export default ClassesPage;
