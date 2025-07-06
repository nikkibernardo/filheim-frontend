
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import QuartzCounter from "../../assets/quartz.jpg";
// import MarbleCounter from "../../assets/marble.jpg";
// import GraniteCounter from "../../assets/granite.jpg";  
// import SolidCounter from "../../assets/solid.jpg";

// function CollectionCountertops() {
//   const countertops = [
//     { id: 1, name: "Quartz", image: QuartzCounter },
//     { id: 2, name: "Marble", image: MarbleCounter },
//     { id: 3, name: "Granite", image: GraniteCounter },
//     { id: 4, name: "Solid Surface", image: SolidCounter }
//   ];

//   return (
//     <section 
//       id="collection-countertops"
//       className="relative py-12 overflow-hidden"
//       style={{
//         backgroundColor: '#EEEEEE',
//         minHeight: '700px',
//       }}
//     >
//       <div className="text-center mb-2 px-4">
//         <h1 
//           className="text-4xl font-bold" 
//           style={{ fontFamily: "'Times New Roman', Times, serif" }}
//         >
//           Artisan Countertops
//         </h1>
//         <p className="text-lg max-w-2xl mx-auto">
//           Where exceptional materials meet impeccable craftsmanship for daily living.
//         </p>
//       </div>

//       {/* Carousel Container */}
//       <div className="w-full h-[500px] relative px-4">
//         <Swiper
//           slidesPerView={1.3}
//           centeredSlides={true}
//           spaceBetween={30}
//           loop={true}
//           pagination={{
//             clickable: true,
//             dynamicBullets: true,
//           }}
//           navigation={true}
//           breakpoints={{
//             640: {
//               slidesPerView: 1.5,
//             },
//             1024: {
//               slidesPerView: 1.8,
//             },
//           }}
//           modules={[Pagination, Navigation]}
//           className="h-full"
//           onSlideChange={(swiper) => {
//             // This ensures the active slide is always centered and highlighted
//             document.querySelectorAll('.swiper-slide').forEach((slide, index) => {
//               if (index === swiper.activeIndex) {
//                 slide.classList.add('active-slide');
//                 slide.classList.remove('inactive-slide');
//               } else {
//                 slide.classList.add('inactive-slide');
//                 slide.classList.remove('active-slide');
//               }
//             });
//           }}
//         >
//           {countertops.map((countertop) => (
//             <SwiperSlide key={countertop.id}>
//               <div className="relative w-full h-[400px] mt-[50px] transition-all duration-300">
//                 <img 
//                   src={countertop.image} 
//                   alt={countertop.name}
//                   className="w-full h-full object-cover shadow-xl"
//                 />
//                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
//                   <h3 className="text-2xl font-semibold text-white text-center">
//                     {countertop.name}
//                   </h3>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

      
//     </section>
//   );
// }

// export default CollectionCountertops;






// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import QuartzCounter from "../../assets/quartz.jpg";
// import MarbleCounter from "../../assets/marble.jpg";
// import GraniteCounter from "../../assets/granite.jpg";  
// import SolidCounter from "../../assets/solid.jpg";

// function CollectionCountertops() {
//   const countertops = [
//     { id: 1, name: "Quartz", image: QuartzCounter },
//     { id: 2, name: "Marble", image: MarbleCounter },
//     { id: 3, name: "Granite", image: GraniteCounter },
//     { id: 4, name: "Solid Surface", image: SolidCounter }
//   ];

//   return (
//     <section 
//       id="collection-countertops"
//       className="relative py-12"
//       style={{
//         backgroundColor: '#EEEEEE',
//         minHeight: '700px',
//       }}
//     >
//       <div className="text-center mb-5 px-4">
//         <h1 
//           className="text-4xl font-bold mb-4" 
//           style={{ fontFamily: "'Times New Roman', Times, serif" }}
//         >
//           Artisan Countertops
//         </h1>
//         <p className="text-lg max-w-2xl mx-auto">
//           Where exceptional materials meet impeccable craftsmanship for daily living.
//         </p>
//       </div>

//       {/* Carousel Container */}
//       <div className="w-full h-[550px] relative mx-auto max-w-6xl pb-12"> {/* Added pb-12 for pagination space */}
//         <Swiper
//           slidesPerView={1.3}
//           centeredSlides={true}
//           spaceBetween={30}
//           loop={true}
//           pagination={{
//             clickable: true,
//             dynamicBullets: true,
//             renderBullet: (index, className) => {
//               return `<span class="${className}" style="background-color: #9A7842; width: 12px; height: 12px; margin: 0 6px; display: inline-block; border-radius: 50%; opacity: ${index === 0 ? '1' : '0.5'};"></span>`;
//             },
//           }}
//           breakpoints={{
//             640: {
//               slidesPerView: 1.5,
//             },
//             1024: {
//               slidesPerView: 1.8,
//             },
//           }}
//           modules={[Pagination]}
//           className="h-full"
//         >
//           {countertops.map((countertop) => (
//             <SwiperSlide key={countertop.id}>
//               <div className="relative w-full h-[400px] mt-[50px] transition-all duration-300 mx-4">
//                 <img 
//                   src={countertop.image} 
//                   alt={countertop.name}
//                   className="w-full h-full object-cover rounded-lg shadow-xl"
//                 />
//                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
//                   <h3 className="text-2xl font-semibold text-white text-center">
//                     {countertop.name}
//                   </h3>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
        
//       </div>
//     </section>
//   );
// }

// export default CollectionCountertops;






import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import QuartzCounter from "../../assets/quartz.jpg";
import MarbleCounter from "../../assets/marble.jpg";
import GraniteCounter from "../../assets/granite.jpg";  
import SolidCounter from "../../assets/solid.jpg";
import { FaPenNib } from "react-icons/fa";

function CollectionCountertops() {
  const countertops = [
    { id: 1, name: "Quartz", image: QuartzCounter },
    { id: 2, name: "Marble", image: MarbleCounter },
    { id: 3, name: "Granite", image: GraniteCounter },
    { id: 4, name: "Solid Surface", image: SolidCounter }
  ];

  return (
    <section 
      id="collection-countertops"
      className="relative pt-16"
      style={{
        backgroundColor: '#EEEEEE',
        minHeight: '700px',
      }}
    >
      <div className="text-center px-4">
        <h1 
          className="text-4xl font-bold" 
          style={{ fontFamily: "'Times New Roman', Times, serif" }}
        >
          Artisan Countertops
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          Where exceptional materials meet impeccable craftsmanship for daily living.
        </p>
      </div>

      <div className="w-full h-[520px] relative mx-auto max-w-6.5xl" style={{ paddingBottom: '50px' }}>
        <Swiper
          slidesPerView={1.3}
          centeredSlides={true}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
            },
            1024: {
              slidesPerView: 1.8,
            },
          }}
          modules={[Pagination]}
          className="h-full"
        >
          {countertops.map((countertop) => (
            <SwiperSlide key={countertop.id}>
              <div className="relative w-full h-[350px] mt-[50px] transition-all duration-300 mx-4">
                <img 
                  src={countertop.image} 
                  alt={countertop.name}
                  className="w-full h-full object-cover rounded-lg shadow-xl"
                />
                <div className="absolute top-4 right-0 w-full">
                  <h3 
                    style={{ fontFamily: "'Times New Roman', Times, serif" }}
                    className="flex flex-row items-center gap-2 absolute top-4 px-10 py-1 right-1 text-gray-900 rounded-sm bg-white/80 transition-opacity duration-300 uppercase text-lg"
                  >
                    <FaPenNib size={12}/> {countertop.name}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Add this to your global CSS */}
      <style jsx global>{`
        .swiper-pagination {
          bottom: 10px !important;
        }
        .swiper-pagination-bullet {
          background: #EEEEEEE !important;
          width: 12px !important;
          height: 12px !important;
          margin: 0 6px !important;
          opacity: 0.5 !important;
        }
        .swiper-pagination-bullet-active {
          opacity: 1 !important;
          transform: scale(1.2) !important;
        }
      `}</style>
    </section>
  );
}

export default CollectionCountertops;