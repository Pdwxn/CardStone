import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/Heartstone webapp logo.png";

const navLinks = [
  { to: "/all-cards", label: "All Cards" },
  { to: "/card-sets", label: "Card Sets" },
  { to: "/classes", label: "Classes" },
  { to: "/all-cardbacks", label: "Card Backs" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClassName = ({ isActive }: { isActive: boolean }) =>
    `rounded-full px-5 py-3 transition hover:bg-amber-300/15 hover:text-amber-100 ${
      isActive
        ? "bg-amber-300 text-slate-950 shadow-lg shadow-amber-500/20"
        : "border border-white/10 bg-white/5 text-slate-200"
    }`;

  return (
    <>
      <nav className="mx-auto mb-8 mt-4 w-[min(92rem,calc(100%-2rem))] border-b border-amber-300/25 pb-4 text-slate-100 md:mt-8">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
            <img
              src={logo}
              alt="CardStone logo"
              className="h-12 w-12 object-contain drop-shadow-[0_0_18px_rgba(251,191,36,0.25)] md:h-16 md:w-16"
            />
            <div>
              <h1 className="text-2xl font-black tracking-wide text-amber-100 md:text-4xl">
                CardStone
              </h1>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-amber-300/70 md:text-xs">
                Hearthstone browser
              </p>
            </div>
          </Link>

          <button
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(true)}
            className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 rounded-2xl border border-white/10 bg-slate-950/65 shadow-lg shadow-black/20 backdrop-blur transition hover:border-amber-300/50 lg:hidden"
          >
            <span className="h-0.5 w-6 rounded-full bg-amber-200"></span>
            <span className="h-0.5 w-6 rounded-full bg-amber-200"></span>
            <span className="h-0.5 w-6 rounded-full bg-amber-200"></span>
          </button>

          <div className="hidden flex-wrap gap-3 text-sm font-bold md:text-base lg:flex">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className={linkClassName}>
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Close navigation overlay"
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          ></button>

          <aside className="absolute right-0 top-0 flex h-full w-[min(22rem,86vw)] flex-col border-l border-amber-300/20 bg-slate-950 px-6 py-6 shadow-2xl shadow-black">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div className="flex items-center gap-3">
                <img src={logo} alt="CardStone logo" className="h-11 w-11 object-contain" />
                <div>
                  <p className="text-xl font-black text-amber-100">CardStone</p>
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-300/70">
                    Menu
                  </p>
                </div>
              </div>
              <button
                type="button"
                aria-label="Close navigation menu"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-2xl border border-white/10 px-4 py-2 text-2xl font-black text-amber-100 transition hover:bg-white/10"
              >
                x
              </button>
            </div>

            <div className="mt-8 flex flex-col gap-3 text-lg font-black">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={linkClassName}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </aside>
        </div>
      )}
    </>
  );
}

export default Navbar;
