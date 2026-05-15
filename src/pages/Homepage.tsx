import Footer from "../components/Layout/footer/Footer";
import Navbar from "../components/Layout/navbar/NavBar";
import Hero from "../components/Layout/body/Hero";

function Homepage() {
  return (
    <>
      <div className="relative w-full h-screen">
        <header className="absolute top-0 left-0 w-full z-20">
          <Navbar />
        </header>
        <Hero />
      </div>

      <div className="bg-slate-100 mt-10 mb-2 mx-20 p-10 rounded-3xl flex flex-wrap justify-between items-center">
        <div>
          <h1 className="text-3xl font-semibold">Information</h1>
          <p className="text-lg mt-5">
            This whole project has been created making use <br />
            of {<span className="text-indigo-500">HearthstoneJSON</span>} as the card data source.
          </p>
          <p className="text-lg mt-5">
            Card images are loaded from the HearthstoneJSON art service,
            without requiring an API key.
          </p>
          <a href="https://hearthstonejson.com" target="_blank">
            <button className="mt-8 bg-slate-800 text-white font-semibold p-4 rounded-lg">
              Visit the project
            </button>
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Homepage;
