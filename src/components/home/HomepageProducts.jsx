import bgKitchen from '../../assets/cc.png';
import bgBathroom from '../../assets/cc-2.jpg';
import bgWardrobe from '../../assets/cc-3.jpg';
import bgLivingArea from '../../assets/cc-4.jpg';
import { MdOutlineZoomOutMap } from "react-icons/md";
import { useState } from 'react';

function HomepageProducts() {
    const [activeFilter, setActiveFilter] = useState('All Categories');
    
    const cabinetItems = [
      { 
        id: 1,
        category: 'Products',
        image: bgKitchen,
        title: 'Modern Kitchen Cabinets'
      },
      { 
        id: 2,
        category: 'Projects',
        image: bgBathroom,
        title: 'Luxury Bathroom Vanities'
      },
      { 
        id: 3,
        category: 'Products',
        image: bgWardrobe,
        title: 'Custom Walk-in Closets'
      },
      { 
        id: 4,
        category: 'Projects',
        image: bgLivingArea,
        title: 'Elegant Entertainment Units'
      },
      { 
        id: 5,
        category: 'Products',
        image: bgKitchen,
        title: 'Traditional Kitchen Design'
      },
      { 
        id: 6,
        category: 'Products',
        image: bgBathroom,
        title: 'Compact Bathroom Storage'
      },
      { 
        id: 7,
        category: 'Products',
        image: bgKitchen,
        title: 'Modern Kitchen Cabinets'
      },
      { 
        id: 8,
        category: 'Projects',
        image: bgBathroom,
        title: 'Luxury Bathroom Vanities'
      },
      // { 
      //   id: 9,
      //   category: 'Products',
      //   image: bgWardrobe,
      //   title: 'Custom Walk-in Closets'
      // },
    ];
  
    const categories = ['All Categories', 'Products', 'Projects'];
  
    const filteredItems = activeFilter === 'All Categories' 
      ? cabinetItems 
      : cabinetItems.filter(item => item.category === activeFilter);


  return (
    <section
      id="home-products"
      className="py-20"
    >
      <div className="flex justify-center items-center text-center">
        <div className="w-full max-w-screen-xl px-4">
          <div className="space-y-6">
            <div className=" items-center">
              {/* <p className="text-lg text-[#9A7842] mb-1 text-left">----</p> */}
              <h1 
                className="text-4xl font-bold text-left"
                style={{ fontFamily: "'Times New Roman', Times, serif" }}
              >
                Featured Products & Projects
              </h1>
              <div className="flex flex-row justify-between items-center mb-6">
                <p className="text-lg max-w-2xl">
                    Custom designs realized through collaborative vision and meticulous craftsmanship.
                  </p>
      
                {/* Filter Buttons */}
                <div className="flex justify-center flex-wrap gap-3">
                  {categories.map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveFilter(category)}
                      className={`${
                        activeFilter === category
                          ? 'text-white bg-[#9A7842] border-[#9A7842]'
                          : 'text-gray-700 bg-white border-gray-200 hover:text-[#9A7842] hover:border-[#9A7842]/30'
                      } border rounded-full text-base font-medium px-5 py-2.5 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-[#9A7842]/30`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Image Gallery Grid */}
            <div className="flex flex-col md:flex-row md:flex-wrap gap-3">
              {filteredItems.map((item, index) => {
                const isWideItem = [0, 3, 4, 7, 8, 11, 12, 15, 16, 19, 20, 23, 24].includes(index);
                return (
                  <div 
                    key={item.id}
                    className={`group relative overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ${
                      isWideItem ? 'md:w-[calc(66.666%_-_0.375rem)] lg:w-[calc(66.666%_-_0.375rem)]' : 'md:w-[calc(33.333%_-_0.375rem)] lg:w-[calc(33.333%_-_0.375rem)]'
                    }`}
                    style={{ height: '256px' }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                    <div className="absolute bottom-4 left-4 text-white transition-opacity duration-300 uppercase">
                      {item.title}
                    </div>
                    <div className="absolute top-4 right-4">
                      <button className="
                        bg-white/90 text-[#9A7842] 
                        p-2 rounded-full 
                        hover:bg-white hover:shadow-md
                        transition-all duration-200
                        focus:outline-none focus:ring-2 focus:ring-[#9A7842]/50
                      ">
                        <MdOutlineZoomOutMap className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default HomepageProducts;