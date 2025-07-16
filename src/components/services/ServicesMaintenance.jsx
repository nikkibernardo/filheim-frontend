import { SiMaterialformkdocs } from "react-icons/si";
import Img from "../../assets/cc.png";
import { IoArrowForward } from "react-icons/io5";

function ServicesMaintenance() {
  return (
    <section 
      id="collection-cabinets" 
      className="relative py-16"
      style={{
        backgroundColor: '#9A7842',
        minHeight: '500px',
      }}
    >
      <div className="flex justify-center items-center text-center">
        <div className="w-full max-w-screen-xl px-4">
          <div className="space-y-6">
            <div className="flex flex-col items-center">

              <div className="grid md:grid-cols-4 gap-4">
                {/* <div className="max-w-sm text-left text-white"> */}
                <div className="max-w-sm text-left text-white flex flex-col justify-center pb-0 lg:pb-10">  
                   <p className="text-lg text-gray-900 text-left">Lorem ipsum</p>
                  <h1 
                    className="text-4xl font-bold mb-2 relative pb-5"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Aftercare and Maintenance
                    <span className="absolute bottom-0 left-0 w-1/2 h-px bg-gray-900"></span>
                  </h1>
                  {/* <p className="text-lg max-w-2xl mx-auto mb-4">
                    Preserve your cabinetry with simple care: dust regularly, use mild cleaners, and avoid abrasives. We offer free adjustments for 5 years to keep everything functioning perfectly.
                  </p> */}
                  {/* <button className="flex flex-row gap-2 items-center bg-gray-900/90 text-white uppercase text-sm p-2 px-4 font-regular hover:bg-gray-900 transition-colors duration-200 hover:font-medium">
                    Read More
                    <IoArrowForward />
                  </button> */}
                </div>

                {/* Card 1 */}
                <div className="max-w-sm bg-white border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                      <img src={Img} alt="Card 1 Img" />
                  </a>
                  <div className="p-5 text-left">
                    <a href="#">
                      <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Aftercare / Maintenance 1
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Lorem ipsum dolor sit amet quae velit aut.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="max-w-sm bg-white border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                      <img src={Img} alt="Card 1 Img" />
                  </a>
                  <div className="p-5 text-left">
                    <a href="#">
                      <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Aftercare / Maintenance 2
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Lorem ipsum dolor sit amet quae velit aut.
                    </p>  
                  </div>
                </div>

                {/* Card 3 */}
                <div className="max-w-sm bg-white border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                      <img src={Img} alt="Card 1 Img" />
                  </a>
                  <div className="p-5 text-left">
                    <a href="#">
                      <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Aftercare / Maintenance 3
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Lorem ipsum dolor sit amet quae velit aut.
                    </p>  
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

export default ServicesMaintenance;