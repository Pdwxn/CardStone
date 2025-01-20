import { useState } from "react";
import Navbar from "../components/Layout/navbar/NavBar";
import Footer from "../components/Layout/footer/Footer";
import CardBackList from "../components/content/CardBackList";

function CardBacksPage() {
    const [loading, setLoading] = useState<boolean>(false);

  return (
    <>
    <div>
        <Navbar />
    </div>
    <div className="ml-[6rem] mr-[6rem]">
        <h1 className="mb-12 text-4xl text-slate-50 font-semibold">All Cardbacks</h1>
        <CardBackList loading={loading} setLoading={setLoading} />
    </div>
    <Footer />
    </>
  )
}

export default CardBacksPage