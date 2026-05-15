import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/Heartstone webapp logo.png";

const navLinks = [
  { to: "/all-cards", label: "All Cards" },
  { to: "/card-sets", label: "Card Sets" },
  { to: "/classes", label: "Classes" },
  { to: "/all-cardbacks", label: "Card Backs" },
];

function Navbar() {
  return (
    <nav className="mx-auto mb-8 mt-6 w-[min(92rem,calc(100%-2rem))] border-b border-amber-300/25 pb-5 text-slate-100 md:mt-8">
      <div className="flex flex-col gap-5 rounded-[2rem] bg-slate-950/55 px-2 py-2 backdrop-blur lg:flex-row lg:items-center lg:justify-between lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-0">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="CardStone logo"
            className="h-14 w-14 object-contain drop-shadow-[0_0_18px_rgba(251,191,36,0.25)] md:h-16 md:w-16"
          />
          <div>
            <h1 className="text-2xl font-black tracking-wide text-amber-100 md:text-4xl">
              CardStone
            </h1>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300/70">
              Hearthstone browser
            </p>
          </div>
        </Link>

        <div className="flex flex-wrap gap-3 text-sm font-bold md:text-base">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-full px-5 py-3 transition hover:bg-amber-300/15 hover:text-amber-100 ${
                  isActive
                    ? "bg-amber-300 text-slate-950 shadow-lg shadow-amber-500/20"
                    : "border border-white/10 bg-white/5 text-slate-200"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
