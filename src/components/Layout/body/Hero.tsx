import hero from "../../../assets/ASW4ACCHGE991428977059569.png"

function Hero() {
  return (
    <>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white text-center drop-shadow-2xl z-10">
          <h1 className="text-5xl font-bold mb-4">Welcome to Cardstone</h1>
          <h1 className="text-3xl font-semibold mb-2">
            The website when you can learn about the <br />
            +3000 cards that exist in Hearthstone
          </h1>
          <h2 className="text-2xl font-semibold">
            Know each class, card set, cardbacks and types
          </h2>
        </div>

        <div className="absolute w-full h-full">
          <img
            src={hero}
            alt="hero"
            className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-transparent"></div>
        </div>
    </>
  )
}

export default Hero