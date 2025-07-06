import { IoArrowForward } from "react-icons/io5";
import Img from "../../assets/sc3.jpg";

function HomepageS2() {
  return (
    <section
      id="collection-hero"
      className="py-16"
      style={{
        backgroundColor: '#EEEEEE',
        minHeight: '500px',
      }}
    >
      <div className="flex justify-center items-center text-left">
        <div className="w-full max-w-screen-xl px-4">
          <div className="space-y-6">
            <div className="flex flex-col items-left">
              <div className="flex flex-col">
                <h1 className="text-4xl font-bold mb-4 text-center" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                  About Filheim
                </h1>

                <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6">
                  <div className="flex flex-col">
                    <p className="text-2xl font-bold uppercase mb-2">What we do</p>
                    <p className="text-lg max-w-2xl">
                      Lorem ipsum dolor sit amet quae velit aut. Lorem ipsum dolor sit amet quae velit aut. Lorem ipsum dolor sit amet quae velit aut. Lorem ipsum dolor sit amet quae velit aut. Lorem ipsum dolor sit amet quae velit aut. Lorem ipsum dolor sit amet quae velit aut 
                    </p>
                  </div>
                  <div>
                    <div className="flex justify-end items-end">
                      <img src={Img} alt="Installtion Img" className="h-[450px] w-[380px]"/>
                    </div>
                  </div>
                  <div>
                    <div className="max-w-sm shadow-sm dark:bg-gray-800 dark:border-gray-700">
                      <a href="#">
                        <img src={Img} alt="Card 1 Img" className="h-[290px] w-full" />
                      </a>
                      <div className="p-5 text-left">
                        <a href="#">
                        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                          About Filheim 
                        </h5>
                        </a>
                        <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
                          Lorem ipsum dolor sit amet quae velit aut.
                        </p>  
                      </div>
                      <div className="flex justify-end">
  <button className="my-4 mx-5 flex flex-row gap-2 items-center bg-gray-900/90 text-white uppercase text-sm p-2 px-4 font-regular hover:bg-gray-900 transition-colors duration-200 hover:font-medium">
    Read More
    <IoArrowForward />
  </button>
</div>
                    </div>
                  </div>
                </div>
             
              </div> 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomepageS2;