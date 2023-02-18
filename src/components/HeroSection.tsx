import centerImage from "../../assets/center_bg_landing_header.svg";
import leftImage from "../../assets/left_bg_landing_header.svg";
import rightImage from "../../assets/right_bg_landing_header.svg";

const HeroSection = () => {
  return (
    <>
      <section className="h-[55vh] bg-[#404eed] relative">
        <img src={centerImage} className="h-full object-cover" />
        <img
          src={leftImage}
          className="absolute bottom-0 left-0 w-6/12 ml-[-348px]"
        />
        <img
          src={rightImage}
          className="absolute bottom-0 right-0 w-6/12 mr-[-348px]"
        />
        <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] sm:w-[90%] md:w-[90%] lg:w-[80%] xl:w-[70%]">
          <h1 className="text-[56px] font-black text-white text-center mb-10 sm:text-[25px] sm:text-left md:text-[38px] md:text-left">
            IMAGINE A PLACE...
          </h1>
          <p className="text-center text-white text-[18px] mb-7 sm:text-[16px] sm:text-left md:text-[16px] md:text-left">
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </p>
          <div className="flex justify-around sm:flex-col md:flex-col">
            <div className="bg-white px-8 py-4 rounded-[28px] cursor-pointer text-[18px] hover:text-[#5865f2] font-semibold sm:w-fit sm:mb-[10px] md:w-fit md:mb-[10px] flex gap-3 justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              Download for Windows
            </div>
            <div className="bg-[#23272a] text-white px-8 py-4 rounded-[28px] cursor-pointer text-[18px] hover:bg-[#36393f] font-semibold sm:w-fit md:w-fit">
              Open Discord in your browser
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HeroSection;
