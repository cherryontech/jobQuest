import './insight.css'
import arrows from "../../assets/arrows.svg";
import toolkit from "../../assets/toolkit.svg";
import checkmark from "../../assets/checkmark.svg";

export default function JobQuestInsight () {
    return (
        <div className="absolute top-[880px] flex items-center justify-center h-[600px] w-[100%] insight">
        <div className="absolute w-4/6 ">
          <h1 className="text-5xl text-[#2C2C2C] font-bold my-8  text-center">
            Wondering whether Job Quest is for you?
          </h1>
          <div className="flex justify-around">
            <div className="flex flex-col p-6 ">
              <img className="w-1/3 h-1/3 m-auto" src={arrows} alt="arrows" />
              <p className="text-[#2C2C2C] text-2xl font-bold my-6">
                Two paths for all users
              </p>
              <span className="text-[#4E4E4E] spanFont w-[100%]">
                Users can choose between a linear structured path and a free
                flowing path.
              </span>
            </div>
            <div className="flex flex-col p-6 ">
              <img
                className="w-1/3 h-1/3 m-auto"
                src={toolkit}
                alt="arrows"
              />
              <p className="text-[#2C2C2C] text-2xl font-bold my-6 ">
                Centralized job guidance
              </p>
              <span className="text-[#4E4E4E] spanFont  w-[100%]">
                A hub that offers tools for resume-building, interview
                preparation, and career advice.
              </span>
            </div>
            <div className="flex flex-col p-6 ">
              <img
                className="w-1/3 h-1/3 m-auto"
                src={checkmark}
                alt="arrows"
              />
              <p className="text-[#2C2C2C] text-2xl font-bold my-6">
                Organized job search
              </p>
              <span className="text-[#4E4E4E] spanFont w-[100%] ">
                Task management feature such as tick lists to keep job search
                organized.
              </span>
            </div>
          </div>
        </div>
      </div>
    )
}