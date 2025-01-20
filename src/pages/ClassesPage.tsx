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
      <nav>
        <Navbar />
      </nav>
      <div className="ml-[6rem] mr-[6rem]">
      <div className="flex flex-wrap object-center gap-15 justify-between items-center">
          <h1 className="mb-8 text-4xl text-slate-50 font-semibold">
            Classes
          </h1>
          <div className="mb-8 flex flex-wrap items-center gap-4">
            <label className="text-lg text-slate-50">Select a Class: </label>
            <Selector
            selectedSet={cardClassName}
            onSetChange={setCardClassName}
            options={classes}
          />
          </div>
        </div>
        {cardClassName && (
        <CardClassesList
          loading={loading}
          setLoading={setLoading}
          setClass={cardClassName}
        />
      )}
      </div>
      <Footer />
    </>
  );
}

export default ClassesPage;
