import Leadership from "./OurStory/Leadership";
import OurContributionSector from "./OurStory/OurContributionSector";
import OurRole from "./OurStory/OurRole";
import OurTeam from "./OurStory/OurTeam";
import OurTourismSector from "./OurStory/OurTourismSector";

const OurStory = () => {
  return (
    <div className="container mx-auto">
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/m6edRmYYASk?autoplay=1&mute=1&loop=1&playlist=m6edRmYYASk&controls=0&showinfo=0&modestbranding=1"
            title="Background Video"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </div>

        {/* Content Over Video */}
        <div className="relative z-10 flex items-center justify-center h-full bg-black/40 text-white text-center px-4">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to Our Story
            </h1>
            <p className="text-lg md:text-xl">Experience the journey with us</p>
          </div>
        </div>
      </div>
      <Leadership />
      <OurTourismSector />
      <OurContributionSector />
      <OurRole />
      <OurTeam />
    </div>
  );
};

export default OurStory;
