/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import logo from "../../../assets/Heartstone webapp logo.png";

interface Props {
  children: any;
}

function Navbar({ children }: Props) {
  return (
    <>
      <nav className="ml-14 mr-14 mt-8 mb-8 p-5 rounded-xl text-slate-800 bg-slate-100 flex flex-wrap gap-8 justify-between items-center">
        <div className="flex flex-wrap items-center">
          <Link to="/" className="flex flex-wrap items-center">
            <img src={logo} alt="logo" className="w-auto h-[4.5rem] mr-3" />
            <h1 className="text-4xl font-bold">CardStone</h1>
          </Link>
        </div>
        <div className="flex flex-wrap gap-8 justify-between items-center">
          <div className="text-xl font-semibold flex flex-wrap gap-8 justify-between items-center">
            <Link to="/all-cards">
              <h2>All Cards</h2>
            </Link>
            <Link to="/all-cardbacks">
              <h2>All Cardbacks</h2>
            </Link>
            <Link to="/card-sets">
              <h2>Card Sets</h2>
            </Link>
            <Link to="/classes">
              <h2>Classes</h2>
            </Link>
          </div>
          <div className="mr-14">{children}</div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
