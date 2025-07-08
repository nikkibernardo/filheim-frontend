import { IoArrowForward } from "react-icons/io5";
import AboutImg from "../../assets/sc5.jpg";
import { BiCabinet } from "react-icons/bi";

function HomepageS2() {
  return (
    <section
      id="collection-hero"
      className="py-16"
    >
      <div className="flex justify-center items-center text-left">
        <div className="w-full max-w-screen-xl px-4">
          <div className="space-y-6">
            <div className="flex flex-col items-left">
              <div className="flex flex-col">

                <div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="text-left">
                      <p className="text-lg text-[#9A7842] text-left">What we do</p>
                      <h1 
                        className="text-4xl font-bold mb-4 text-left pb-5 relative" 
                        style={{ fontFamily: "'Times New Roman', Times, serif" }}
                      >
                        All About Filheim
                        <span className="absolute bottom-0 left-0 w-1/2 h-px bg-[#9A7842]"></span>
                      </h1>

                      <p className="text-lg max-w-2xl">
                        Lorem ipsum dolor sit amet quae velit aut. Lorem ipsum dolor sit amet quae velit aut. Lorem ipsum dolor sit amet quae velit aut.     
                      </p>
                      <p className="text-lg max-w-2xl mt-5">
                        Lorem ipsum dolor sit amet quae velit aut. Lorem ipsum dolor sit amet quae velit aut. Lorem ipsum dolor sit amet quae velit aut. 
                      </p>
                      <p className="text-lg max-w-2xl mt-5">
                        Lorem ipsum dolor sit amet quae velit aut. Lorem ipsum dolor sit amet quae velit aut. Lorem ipsum dolor sit amet quae velit aut. 
                      </p>

                      <div className="grid grid-cols-2 gap-4 mt-8">
                        <div className="flex flex-row items-center gap-2">
                          <BiCabinet size={26}/>
                          <span className="text-lg">Custom Cabinets</span>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                          <BiCabinet size={26}/>
                          <span className="text-lg">Custom Cabinets</span>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                          <BiCabinet size={26}/>
                          <span className="text-lg">Custom Cabinets</span>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                          <BiCabinet size={26}/>
                          <span className="text-lg">Custom Cabinets</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="">
                      <div className="flex w-full">
                        <img src={AboutImg} alt="Home About Filheim Img" className="h-[500px] w-full"/>
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