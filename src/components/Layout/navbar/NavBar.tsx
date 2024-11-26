/* eslint-disable @typescript-eslint/no-explicit-any */

interface Props {
  children: any;
}

function Navbar({ children }: Props) {
  return (
    <div className="flex flex-wrap gap-8 justify-between items-center">
      <div className="ml-14 mt-8 mb-8 text-white">
        <h1 className="text-3xl font-bold underline">Heartstone Cards API</h1>
        <h3>Use this website to make your deck!</h3>
      </div>
      <div className="mr-14">
        {children}
      </div>
    </div>
  );
}

export default Navbar;
