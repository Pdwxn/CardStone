import { Link } from "react-router-dom";
import hero from "../../../assets/ASW4ACCHGE991428977059569.png";

function Hero() {
  return (
    <>
      <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center px-4 pt-28 md:px-12 lg:px-20">
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-4xl text-left drop-shadow-2xl">
            <p className="mb-5 inline-flex rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.28em] text-amber-200">
              Powered by HearthstoneJSON
            </p>
            <h1 className="text-5xl font-black leading-tight text-white md:text-7xl lg:text-8xl">
              Browse Hearthstone cards like a tavern archivist.
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-slate-200 md:text-xl">
              Explore collectible cards by class, expansion, mana cost, attack,
              and health with fast client-side filtering and full card renders.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/all-cards"
                className="rounded-full bg-amber-300 px-6 py-3 font-black text-slate-950 shadow-xl shadow-amber-500/20 transition hover:-translate-y-0.5 hover:bg-amber-200"
              >
                Browse All Cards
              </Link>
              <Link
                to="/classes"
                className="rounded-full border border-white/15 bg-white/10 px-6 py-3 font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15"
              >
                Explore Classes
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute h-full w-full">
        <img
          src={hero}
          alt="Hearthstone inspired hero background"
          className="absolute left-0 top-0 h-full w-full object-cover"
        />
        <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-br from-slate-950 via-slate-950/75 to-indigo-950/45"></div>
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950 to-transparent"></div>
      </div>
    </>
  );
}

export default Hero;
