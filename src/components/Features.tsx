import inviteOnly from "../../assets/invite_only_landing.svg";
import hangingOut from "../../assets/hanging_out_easy_landing.svg";
import fandom from "../../assets/fandom_landing.svg";
const Features = () => {
  return (
    <>
      <section className="flex py-28 sm:flex-col md:flex-col lg:flex-col">
        <div className="flex-[0.6]">
          <img src={inviteOnly} className="w-[80%] my-0 mx-auto" />
        </div>
        <div className="flex-[0.4]">
          <h2 className="text-[#23272a] text-[48px] font-bold p-[15px] pr-[152px] leading-[1.4] sm:text-[28px] sm:p-[15px] md:text-[32px] md:p-[15px] lg:p-[15px]">
            Create an invite-only place where you belong
          </h2>
          <p className="text-[#23272a] text-[18px] px-[15px] pr-[152px] sm:text-[16px] sm:p-[15px] md:text-[16px] md:p-[15px] lg:p-[15px]">
            Discord servers are organized into topic-based channels where you
            can collaborate, share, and just talk about your day without
            clogging up a group chat.
          </p>
        </div>
      </section>

      <section className="flex py-28 bg-[#f6f6f6] sm:flex-col md:flex-col lg:flex-col">
        <div className="flex-[0.4]">
          <h2 className="text-[#23272a] text-[48px] font-bold p-[15px] pl-[152px] leading-[1.4] sm:text-[28px] sm:p-[15px] md:text-[32px] md:p-[15px] lg:p-[15px]">
            Where hanging out is easy
          </h2>
          <p className="text-[#23272a] text-[18px] px-[15px] pl-[152px] sm:text-[16px] sm:p-[15px] md:text-[16px] md:p-[15px] lg:p-[15px]">
            Grab a seat in a voice channel when you’re free. Friends in your
            server can see you’re around and instantly pop in to talk without
            having to call.
          </p>
        </div>
        <div className="flex-[0.6]">
          <img src={hangingOut} className="w-[80%] my-0 mx-auto" />
        </div>
      </section>

      <section className="flex py-28 sm:flex-col md:flex-col lg:flex-col">
        <div className="flex-[0.6]">
          <img src={fandom} className="w-[80%] my-0 mx-auto" />
        </div>
        <div className="flex-[0.4]">
          <h2 className="text-[#23272a] text-[48px] font-bold p-[15px] pr-[152px] leading-[1.4] sm:text-[28px] sm:p-[15px] md:text-[32px] md:p-[15px] lg:p-[15px]">
            From few to a fandom
          </h2>
          <p className="text-[#23272a] text-[18px] px-[15px] pr-[152px] sm:text-[16px] sm:p-[15px] md:text-[16px] md:p-[15px] lg:p-[15px]">
            Get any community running with moderation tools and custom member
            access. Give members special powers, set up private channels, and
            more.
          </p>
        </div>
      </section>
    </>
  );
};
export default Features;
