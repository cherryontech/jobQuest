import "./insight.css";
import arrows from "../../assets/arrows.svg";
import toolkit from "../../assets/toolkit.svg";
import checkmark from "../../assets/checkmark.svg";

export default function JobQuestInsight() {
  return (
    <div className="absolute top-[880px] flex items-center justify-center h-[600px] w-[100%] insight">
      <div className="absolute w-4/6 ">
        <h1 className="text-5xl text-[#2C2C2C] font-bold my-8  text-center">
          Wondering whether Job Quest is for you?
        </h1>
        <div className="flex justify-between">
          <div className="flex flex-col w-1/3 p-6 h-[310px] max-h-100 ">
            <img
              className="w-15 h-15 ml-auto mr-auto"
              src={arrows}
              alt="arrows"
            />
            <p className="text-[#2C2C2C] text-center text-2xl font-bold mb-6 mt-10">
              Two paths for all users
            </p>
            <span className="text-[#4E4E4E] spanFont">
              Users can choose between a linear structured path and a free
              flowing path.
            </span>
          </div>
          <div className="flex flex-col w-2/5 p-6 h-[310px] max-h-100 ">
            <img
              className="w-15 h-15 ml-auto mr-auto"
              src={toolkit}
              alt="arrows"
            />
            <p className="text-[#2C2C2C] text-center text-2xl font-bold mb-6 mt-10">
              Centralized job guidance
            </p>
            <span className="text-[#4E4E4E] spanFont">
              A hub that offers tools for <br /> resume-building, interview
              preparation, <br />
              and career advice.
            </span>
          </div>
          <div className="flex flex-col w-1/3 p-6 h-[310px] max-h-100 ">
            <img
              className="w-15 h-15 ml-auto mr-auto"
              src={checkmark}
              alt="arrows"
            />
            <p className="text-[#2C2C2C] text-center text-2xl font-bold  mb-6 mt-10">
              Organized job search
            </p>
            <span className="text-[#4E4E4E] spanFont">
              Task management feature such as tick lists to keep job search
              organized.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
