import { Buttons } from "../../components/Buttons";
import "./style.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export const RoadmapPage = () => {
  return (
    <div className="index">
      <p className="advice-tips">Advice, Tips &amp; Actionable Steps</p>
      <p className="text-wrapper-5">
        All you need for job search success in one place!
      </p>
      <div className="top-nav-bar">
        <div className="top-nav-bar-2">
          <div className="text-wrapper-6">Job Quest</div>
        </div>
      </div>

      <img className="img" src="https://via.placeholder.com/634x552" />
      {/* <div className="text-wrapper-4">Choose your learning style:</div> */}
      <div className="ellipse" />
      <div className="overlap">
        <div className="page-BG" />
        <div className="bottom-card-section">
          <div className="overlap-group">
            <div className="free-flowing">
              <Tabs className="tab text-wrapper-2">
                <TabList>
                  <Tab className="tab-title">Free Flowing</Tab>
                  <Tab className="tab-title">Linear Path</Tab>
                </TabList>
                <TabPanel>
                  {/* <FreeFlow /> */}
                  <img alt="Line" src="src/assets/Line.png" />
                  {/* <p className="p linear-path overlap-group-2 text-wrapper-2"> */}
                  <p className="text-wrapper-3">
                    Banish overwhelm. Complete each task one step at a time to
                    unlock the next step.
                  </p>
                </TabPanel>
                <TabPanel>
                  {/* <LinearPath/> */}
                  <img alt="Line" src="src/assets/Line.png" />
                  {/* <p className="text-wrapper-3"> */}
                  <p className="text-wrapper-3">
                    Dip in and out and complete whatever tasks you like whenever
                    you want!
                  </p>
                </TabPanel>
              </Tabs>
            </div>
            {/* <div className="linear-path">
                <div className="overlap-group-2">
                  <div className="text-wrapper">Linear Path</div>
                  <img
                    className="line"
                    alt="Line"
                    src="https://cdn.animaapp.com/projects/652ee00b2873525a7a887798/releases/654f0413f197b5633923a301/img/line-1-1.svg"
                  />
                  <p className="p">Banish overwhelm. Complete each task one step at a time to unlock the next step.</p>
                </div>
              </div> */}
            <div className="overlap-group-wrapper">
              <div className="overlap-group-3">
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-3">
                    <div className="rectangle" />
                    <div className="rectangle-2" />
                  </div>
                </div>

                {/* <div className="free-flowing">
                    <div className="text-wrapper-2">Free Flowing</div>
                    <img
                      className="img"
                      alt="Line"
                      src="https://cdn.animaapp.com/projects/652ee00b2873525a7a887798/releases/654f0413f197b5633923a301/img/line-2.svg"
                    />
                    <p className="text-wrapper-3">
                      Dip in and out and complete whatever tasks you like whenever you want!
                    </p>
                  </div> */}
              </div>
            </div>
          </div>
        </div>
        <img
          className="JQ-final-colors"
          alt="Jq final colors"
          src="https://cdn.animaapp.com/projects/652ee00b2873525a7a887798/releases/654f0413f197b5633923a301/img/jq-final-colors-1@2x.png"
        />
        <div className="text-wrapper-4">Choose your learning style:</div>
        <div className="ellipse" />
      </div>
    </div>
  );
};
