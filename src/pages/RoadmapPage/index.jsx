import React, { useState } from "react";
import "./style.css";
import { FreeflowingCard } from "../../components/FreeflowingCard";
import { LinearPathCard } from "../../components/LinearPathCard";
import { ScrollShadow } from "@nextui-org/react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import roadmapImg from "../../assets/RoadmapHeroImage.png";
import mascot from "../../assets/RoadmapMascot.png";

export const RoadmapPage = () => {
  const [isDisabled, setIsDisabled] = useState(0);
  console.log(isDisabled)
  return (
    <div className="index">
      <p className="advice-tips">Advice, Tips &amp; Actionable Steps</p>

      <p className="header-sub-text">
        All you need for job search success in one place!
      </p>

      <img className="img" src={roadmapImg} />

      <div className="overlap">
        <div className="page-BG" />

        <div className="text-wrapper-4">Choose your learning style:</div>

        <div className="bottom-card-section bg-white rounded-3xl">
          <div className="overlap-group">
            <Tabs>
              <TabList className={"flex w-full mb-16"}>
                <Tab
                  className={
                    "cursor-pointer flex-1 px-12 py-6 text-center bg-[#F5F7F8] rounded-tl-3xl rounded-tr-3xl"
                  }
                >
                  <div className="pb-6 text-primary-blue font-bold text-4xl border-b-2 border-solid border-b-primary-blue">
                    Free Flowing
                  </div>
                  <div className="text-primary-blue py-5 font-inter text-xl font-light">
                    Dip in and out and complete whatever tasks you like whenever
                    you want!
                  </div>
                </Tab>
                <Tab
                  className={
                    "cursor-pointer flex-1 px-12 py-6 text-center bg-[#F5F7F8] rounded-tl-3xl rounded-tr-3xl"
                  }
                >
                  <div className="pb-6 text-primary-blue font-bold text-4xl border-b-2 border-solid border-b-primary-blue">
                    Linear Path
                  </div>
                  <div className="text-primary-blue py-5 font-inter text-xl font-light">
                    Banish overwhelm. Complete each task one step at a time to
                    unlock the next step.
                  </div>
                </Tab>
              </TabList>
              <div className="mb-16">
                <TabPanel className={"px-8"}>
                  <div className="freeflowing-card-grid">
                    <FreeflowingCard
                      cardName={"LinkedIn"}
                      cardUrl="linkedin"
                      className="freeflowing-card"
                    />
                    <FreeflowingCard
                      cardName={"Resume"}
                      cardUrl="resume"
                      className="freeflowing-card"
                    />
                    <FreeflowingCard
                      cardName={"Interview Prep"}
                      cardUrl="interview-prep"
                      className="freeflowing-card"
                    />
                    <FreeflowingCard
                      cardName={"Application Advice"}
                      cardUrl="application-advice"
                      className="freeflowing-card"
                    />
                    <FreeflowingCard
                      cardName={"Job Searching Tips"}
                      cardUrl="job-searching-tips"
                      className="freeflowing-card"
                    />
                    <FreeflowingCard
                      cardName={"Bonus Tasks"}
                      cardUrl="bonus-tasks"
                      className="freeflowing-card"
                    />
                  </div>
                </TabPanel>
                <TabPanel className={"px-32"}>
                  <ScrollShadow
                    className="w-[750px] h-[544px] scrollbar"
                    size="24"
                  >
                    <LinearPathCard
                      cardName={"LinkedIn"}
                      cardUrl="linkedin"
                      isDisabled={isDisabled}
                      setIsDisabled={setIsDisabled}
                    />
                    <LinearPathCard
                      cardName={"Resume"}
                      cardUrl="resume"
                      isDisabled={isDisabled}
                      setIsDisabled={setIsDisabled}
                    />
                    <LinearPathCard
                      cardName={"Interview Prep"}
                      cardUrl="interview-prep"
                      isDisabled={isDisabled}
                      setIsDisabled={setIsDisabled}
                    />
                    <LinearPathCard
                      cardName={"Application Advice"}
                      cardUrl="application-advice"
                      isDisabled={isDisabled}
                      setIsDisabled={setIsDisabled}
                    />
                    <LinearPathCard
                      cardName={"Job Searching Tips"}
                      cardUrl="job-searching-tips"
                      isDisabled={isDisabled}
                      setIsDisabled={setIsDisabled}
                    />
                    <LinearPathCard
                      cardName={"Bonus Tasks"}
                      cardUrl="bonus-tasks"
                      isDisabled={isDisabled}
                      setIsDisabled={setIsDisabled}
                    />
                  </ScrollShadow>
                </TabPanel>
              </div>
            </Tabs>
          </div>
        </div>

        <img className="JQ-final-colors" alt="Jq final colors" src={mascot} />
      </div>
    </div>
  );
};
