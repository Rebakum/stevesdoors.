import Leadership from "./OurStory/Leadership";
import OurContributionSector from "./OurStory/OurContributionSector";
import OurRole from "./OurStory/OurRole";
import OurTeam from "./OurStory/OurTeam";
import OurTourismSector from "./OurStory/OurTourismSector";

const OurStory = () => {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        {/* YouTube Video Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/xau74kckNMs?autoplay=1&mute=1&controls=0&loop=1&playlist=xau74kckNMs&modestbranding=1&showinfo=0"
            title="YouTube video background"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>

        {/* Overlay Text */}
        <div className="relative z-10 flex items-center justify-center h-full bg-black bg-opacity-50 text-white text-4xl font-bold text-center px-4">
          <h1>Legacy in every door we create</h1>
        </div>
      </div>
      <Leadership />
      <OurTourismSector />
      <OurContributionSector />
      <OurRole />
      <OurTeam />
    </>
  );
};

export default OurStory;
