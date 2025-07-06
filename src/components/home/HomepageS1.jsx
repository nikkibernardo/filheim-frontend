

function HomepageS1() {
  return (
    <section
      id="homepage-s1"
      className="flex justify-center items-center text-center"
    >
      <div className="mt-10 md:mt-32">
        <div className="space-y-4">
          <div className="flex flex-col items-center">
            <h1
              className="text-4xl font-bold text-white uppercase"
              style={{ fontFamily: "'Times New Roman', Times, serif" }}
            >
              DESIGN YOUR CABINETS<br />
              WITH THE EXPERTS
            </h1>

            <p className="text-lg font-extralight text-white">Lorem ipsum dolor sit amet quae velit aut </p>

            <button
              className="text-white uppercase py-2 mt-16 w-48"
              style={{ backgroundColor: "#BC9B66" }}
              onMouseOver={e => e.currentTarget.style.backgroundColor = "#8a6d3b"}
              onMouseOut={e => e.currentTarget.style.backgroundColor = "#BC9B66"}
            >
              Book now
            </button>

            <div
              className="mt-20 w-full max-w-[900px] mx-auto text-white bg-white/20 focus:ring-4 focus:outline-none focus:ring-white/30 font-semibold rounded-sm text-sm px-4 py-16 text-center dark:bg-white/10 dark:hover:bg-white/20 dark:focus:ring-white/30 border border-white"
            >
              {/* CONTACT US */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomepageS1;