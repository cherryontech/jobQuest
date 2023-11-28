import React from "react";
import "./style.css";
import { FreeflowingCard } from "../../components/FreeflowingCard";
import { LinearPathCard } from "../../components/LinearPathCard";
import { ScrollShadow } from "@nextui-org/react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { NavigationBar } from "../../components/NavigationBar";

export const RoadmapPage = () => {
  return (
    <div className="index">
      <p className="advice-tips">Advice, Tips &amp; Actionable Steps</p>

      <p className="header-sub-text">
        All you need for job search success in one place!
      </p>

      <div className="top-nav-bar">
      <div className="div-wrapper">
      <NavigationBar />
        </div>
      </div>

      <img className="img" src="src/assets/RoadmapHeroImage.png" />

      <div className="overlap">
        <div className="page-BG" />

        <div className="text-wrapper-4">Choose your learning style:</div>

        <div className="bottom-card-section bg-white rounded-3xl">
          <div className="overlap-group">
            <Tabs>
              <TabList className={"flex w-full mb-16"}>
                <Tab className={"flex-1 px-12 py-6 text-center bg-[#F5F7F8] rounded-tl-3xl rounded-tr-3xl"}>
                  <div className="pb-6 text-primary-blue font-bold text-4xl border-b-2 border-solid border-b-primary-blue">Free Flowing</div>
                  <div className="text-primary-blue py-5 font-inter text-xl font-light">
                    Dip in and out and complete whatever tasks you like whenever you want!
                  </div>
                </Tab>
                <Tab className={"flex-1 px-12 py-6 text-center bg-[#F5F7F8] rounded-tl-3xl rounded-tr-3xl"}>
                  <div className="pb-6 text-primary-blue font-bold text-4xl border-b-2 border-solid border-b-primary-blue">Linear Path</div>
                  <div className="text-primary-blue py-5 font-inter text-xl font-light">
                    Banish overwhelm. Complete each task one step at a time to unlock the next step.
                  </div>
                </Tab>
              </TabList>
              <div className="mb-16">
                <TabPanel className={"px-12"}>
                  <div className="freeflowing-card-grid">
                  <FreeflowingCard cardName={"Linkedin"} cardUrl="linkedin" className="freeflowing-card"/>
                  <FreeflowingCard cardName={"Resume"} cardUrl="resume" className="freeflowing-card"/>
                  <FreeflowingCard cardName={"Interview Prep"} cardUrl="interview-prep" className="freeflowing-card"/>
                  <FreeflowingCard cardName={"Application Advice"} cardUrl="application-advice" className="freeflowing-card"/>
                  <FreeflowingCard cardName={"Job Searching Tips"} cardUrl="job-searching-tips" className="freeflowing-card"/>
                  <FreeflowingCard cardName={"Bonus Tasks"} cardUrl="bonus-tasks" className="freeflowing-card"/>
                  </div>
                </TabPanel>
                <TabPanel className={"px-32"}>
                  <ScrollShadow className="w-[750px] h-[544px]" size="24">
                    <LinearPathCard cardName={"Linkedin"} cardUrl="linkedin"/>
                    <LinearPathCard cardName={"Resume"} cardUrl="resume"/>
                    <LinearPathCard cardName={"Interview Prep"} cardUrl="interview-prep"/>
                    <LinearPathCard cardName={"Application Advice"} cardUrl="application-advice"/>
                    <LinearPathCard cardName={"Job searching Tips"} cardUrl="job-searching-tips"/>
                    <LinearPathCard cardName={"Bonus Tasks"} cardUrl="bonus-tasks"/>
                  </ScrollShadow>
                </TabPanel>
              </div>
            </Tabs>
          </div>
        </div>

        <img
          className="JQ-final-colors"
          alt="Jq final colors"
          src="src/assets/RoadmapMascot.png"
        />
      </div>
    </div>
  );
};
