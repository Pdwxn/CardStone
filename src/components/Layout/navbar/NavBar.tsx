/* eslint-disable @typescript-eslint/no-explicit-any */
import logo from "../../../assets/Heartstone webapp logo.png";


interface Props {
  children: any;
}

function Navbar({ children }: Props) {
  return (
    <div className="">
      <div className="ml-14 mr-14 mt-8 mb-8 p-5 rounded-xl text-slate-800 bg-slate-100 flex flex-wrap gap-8 justify-between items-center">
        <div className="flex flex-wrap items-center">
          <img src={logo} alt="logo" className="w-auto h-[4.5rem] mr-3" />
          <h1 className="text-4xl font-bold">CardStone</h1>
        </div>
        <div className="flex flex-wrap gap-8 justify-between items-center">
          <div className="text-xl font-semibold flex flex-wrap gap-8 justify-between items-center">
            <h2>All Cards</h2>
            <h2>Card Sets</h2>
            <h2>All Cardbacks</h2>
            <h2>Classes</h2>
          </div>
          <div className="mr-14">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
