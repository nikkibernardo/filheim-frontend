import Navbar from "../components/Navbar";
import bgImg from '../assets/bg.png';
import CollectionCabinets from "../components/collections/CollectionCabinets";
import CollectionCountertops from "../components/collections/CollectionCountertops";
import CollectionHero from "../components/collections/CollectionHero";

function CollectionPage() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          minHeight: '350px',
        }}
      >
        <Navbar />
        <CollectionHero />
      </div>
      
      <CollectionCabinets />
      <CollectionCountertops />
      <div className="bg-white py-32"></div>
    </div>
  );
}

export default CollectionPage;