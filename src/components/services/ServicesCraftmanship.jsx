import { SiMaterialformkdocs } from "react-icons/si";
import Img from "../../assets/sc3.jpg";

function ServicesCraftmanship() {
  return (
    <section 
      id="collection-cabinets" 
      // className="py-24" 
      className="relative pt-16"
      style={{
        backgroundColor: '#EEEEEE',
        minHeight: '500px',
      }}
    >
      <div className="flex justify-center items-start text-center">
        <div className="w-full max-w-screen-xl px-4">
          <div className="space-y-2">
            <div className="grid md:grid-cols-2">

              <div className="flex flex-col">
                <div>
                  <p className="text-lg text-[#9A7842] text-left">----</p>
                  <h1 
                    className="text-4xl font-bold text-left mb-2"
                    style={{ fontFamily: "'Times New Roman', Times, serif" }}
                  >
                    Craftmanship and Production
                  </h1>
                  <p className="text-lg max-w-5xl mx-auto text-left">
                    Precision-crafted using time-tested techniques, where traditional woodworking meets modern engineering. Every detail—from joint to finish—is perfected for enduring beauty and strength.
                  </p>
                </div>


                <div className="w-full pt-12 py-2">
                  <div className="grid gap-3 md:grid-cols-2 md:gap-6">
                    {/* Card 1 */}
                    <div className="rounded-sm bg-white p-4 text-center shadow-xl">
                      <div className="mx-auto flex h-16 w-16 -translate-y-8 transform items-center justify-center rounded-md bg-[#9A7842] shadow-lg shadow-gray-900/40">
                        <SiMaterialformkdocs className="text-white" size={20}/>
                      </div>
                      <h1 className="text-darken text-lg font-medium lg:px-14 uppercase">Material Selection</h1>
                      <p className="px-4 text-gray-500 text-sm">
                        Sustainably sourced hardwoods aged for stability, paired with bespoke hardware
                      </p>
                    </div>

                    {/* Card 2 */}
                    <div className="rounded-xl bg-white p-4 text-center shadow-xl">
                      <div className="mx-auto flex h-16 w-16 -translate-y-8 transform items-center justify-center rounded-md bg-[#9A7842] shadow-lg shadow-gray-900/40">
                        <SiMaterialformkdocs className="text-white" size={20}/>
                      </div>
                      <h1 className="text-darken text-lg font-medium lg:px-14 uppercase">Production Techniques</h1>
                      <p className="px-4 text-gray-500 text-sm">
                        Dovetail joinery, hand-sanded surfaces, and low-VOC finishes applied in controlled environments
                      </p>
                    </div>

                    {/* Card 3 */}
                    <div className="rounded-xl bg-white p-4 text-center shadow-xl">
                      <div className="mx-auto flex h-16 w-16 -translate-y-8 transform items-center justify-center rounded-md bg-[#9A7842] shadow-lg shadow-gray-900/40">
                        <SiMaterialformkdocs className="text-white" size={20}/>
                      </div>
                      <h1 className="text-darken text-lg font-medium lg:px-14 uppercase">Quality Assurance</h1>
                      <p className="px-4 text-gray-500 text-sm">
                        12-stage inspection process, from grain-matching to final polish
                      </p>
                    </div>

                    {/* Card 4 */}
                    <div className="rounded-xl bg-white p-4 text-center shadow-xl">
                      <div className="mx-auto flex h-16 w-16 -translate-y-8 transform items-center justify-center rounded-md bg-[#9A7842] shadow-lg shadow-gray-900/40">
                        <SiMaterialformkdocs className="text-white" size={20}/>
                      </div>
                      <h1 className="text-darken text-lg font-medium lg:px-14 uppercase">Artisan Training</h1>
                      <p className="px-4 text-gray-500 text-sm">
                        Master craftsmen with 15+ years of specialized training, preserving heritage methods while innovating for contemporary needs
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end items-end">
                <img src={Img} alt="Craftmanship and Production Img" className="h-[740px] w-[500px]"/>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesCraftmanship;