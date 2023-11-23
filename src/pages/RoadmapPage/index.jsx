import React from "react";
import { Buttons } from "../../components/Buttons";
import "./style.css";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export const RoadmapPage = () => {
  return (
    <div className="index">
      <p className="advice-tips">Advice, Tips &amp; Actionable Steps</p>

      <p className="header-sub-text">
        All you need for job search success in one place!
      </p>

      <div className="top-nav-bar">
        <div className="top-nav-bar-2">
          <div className="nav-text">Job Quest</div>
        </div>
      </div>

      <img className="img" src="src/assets/RoadmapHeroImage.png" />

      <div className="overlap">
        <div className="page-BG" />

        <div className="text-wrapper-4">Choose your learning style:</div>

        <div className="bottom-card-section">
          <div className="overlap-group">
     

            <Tabs>
              <TabList>
                <Tab>Free Flowing</Tab>
                <Tab>Linear Path</Tab>
              </TabList>
              <TabPanel>
                <p className="text-wrapper-3">
                  Banish overwhelm. Complete each task one step at a time to
                  unlock the next step.
                </p>
               
              </TabPanel>
              <TabPanel>
                <p className="text-wrapper-3">
                  Dip in and out and complete whatever tasks you like whenever
                  you want!
                </p>
              </TabPanel>
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
