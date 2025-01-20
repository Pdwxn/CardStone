import { useState } from "react";
import CardList from "../components/content/CardList";
import Navbar from "../components/Layout/navbar/NavBar";
import Footer from "../components/Layout/footer/Footer";


function AllCardsPage() {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <div className="ml-[6rem] mr-[6rem]">
        <h1 className="mb-8 text-4xl text-slate-50 font-semibold">All Cards</h1>
        <CardList loading={loading} setLoading={setLoading} />
      </div>
      <Footer />
    </>
  );
}

export default AllCardsPage;
