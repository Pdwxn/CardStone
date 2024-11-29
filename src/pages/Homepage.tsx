import Footer from "../components/Layout/footer/Footer";
import Navbar from "../components/Layout/navbar/NavBar";
import SearchBar from "../components/Layout/navbar/SearchBar";
import screenshot from "../assets/screenshot-hearthstoneapi.png";
import Hero from "../components/Layout/body/Hero";

interface Props {
  query: string;
  setQuery: (query: string) => void;
}

function Homepage({ query, setQuery }: Props) {
  return (
    <>
      <div className="relative w-full h-screen">
        <header className="absolute top-0 left-0 w-full z-20">
          <Navbar>
            <SearchBar query={query} setQuery={setQuery} />
          </Navbar>
        </header>
        <Hero />
      </div>

      <div className="bg-slate-100 mt-10 mb-2 mx-20 p-10 rounded-3xl flex flex-wrap justify-between items-center">
        <div>
          <h1 className="text-3xl font-semibold">Information</h1>
          <p className="text-lg mt-5">
            This whole project has been created making use <br />
            of the {<span className="text-indigo-500">HearthstoneAPI</span>}, created by omgvamp <br />
            which can be found at RapidAPI.
          </p>
          <p className="text-lg mt-5">
            Please take a look at their official website where <br />
            you can learn even more about this unofficial project.
          </p>
          <a href="https://hearthstoneapi.com" target="_blank">
            <button className="mt-8 bg-slate-800 text-white font-semibold p-4 rounded-lg">
              Visit the project
            </button>
          </a>
        </div>
        <img
          src={screenshot}
          alt="hearthstoneapi.com"
          className="absolute right-[0.84rem] w-auto h-[18rem] rounded-lg"
          style={{
            clipPath: "polygon(0 0, 89% 0, 89% 100%, 0 100%)",
          }}
        />
      </div>

      <Footer />
    </>
  );
}

export default Homepage;
