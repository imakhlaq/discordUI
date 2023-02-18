import chiling from "../../assets/just_chiling_landing.svg";
import stars from "../../assets/tiny_stars_landing.svg";
const Actions = () => {
  return (
    <section className="py-28 pb-56 bg-[#f6f6f6]">
      <h2 className="text-[#23272a] text-[48px] font-extrabold text-center w-[60%] my-0 mx-auto mb-[15px] sm:text-[28px] sm:text-left sm:w-[90%] md:text-[32px] md:text-left md:w-[90%]">
        Reliable tech for staying close
      </h2>
      <p className="text-[#23272a] text-[18px] w-[60%] my-0 mx-auto text-center sm:text-[16px] sm:text-left sm:w-[90%] md:text-[16px] md:text-left md:w-[90%]">
        Low-latency voice and video feels like you’re in the same room. Wave
        hello over video, watch friends stream their games, or gather up and
        have a drawing session with screen share.
      </p>
      <div className="mb-[30px]">
        <img src={chiling} className="w-[90%] my-0 mx-auto" />
      </div>
      <div className="w-[40%] my-0 mx-auto relative sm:w-[90%] md:w-[90%] lg:w-[80%]">
        <img src={stars} />
        <h2 className="absolute top-[20px] w-full text-center text-[32px] font-semibold text-[#23272a]">
          Ready to start your journey?
        </h2>
        <div className="bg-[#404eed] text-white px-8 py-4 rounded-[28px] cursor-pointer text-[20px] absolute top-[100px] left-[50%] translate-x-[-50%] w-max hover:bg-[#5865f2]">
          <i className="fa-solid fa-download"></i> Download for Windows
        </div>
      </div>
    </section>
  );
};
export default Actions;
