import Navbar from "../components/Navbar";
import bgImg from '../assets/bg.png';
import AboutHero from "../components/about/AboutHero";
import AboutStory from "../components/about/AboutStory";

function AboutPage() {
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
        <AboutHero />
      </div>
      <AboutStory />

    </div>
  );
}

export default AboutPage;