import { Buttons } from "../../components/Buttons";
import "./style.css";

export const RoadmapPage = () => {
  return (
    <div className="index">
      <div className="div">
        <div className="overlap">
          <div className="page-BG" />
          <div className="bottom-card-section">
            <div className="overlap-group">
              <div className="linear-path">
                <div className="overlap-group-2">
                  <div className="text-wrapper">Linear Path</div>
                  <img
                    className="line"
                    alt="Line"
                    src="src/assets/Line.png"
                  />
                  <p className="p">
                    Banish overwhelm. Complete each task one step at a time to
                    unlock the next step.
                  </p>
                </div>
              </div>
              <div className="overlap-group-wrapper">
                <div className="overlap-group-3">
                  <div className="overlap-group-wrapper">
                    <div className="overlap-group-3">
                      <div className="rectangle" />
                      <div className="rectangle-2" />
                    </div>
                  </div>
                  <div className="free-flowing">
                    <div className="text-wrapper-2">Free Flowing</div>
                    <img
                      className="img"
                      alt="Line"
                      src="src/assets/Line.png"
                    />
                    <p className="text-wrapper-3">
                      Dip in and out and complete whatever tasks you like
                      whenever you want!
                    </p>
                  </div>
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
          <div className="cards">
            <div className="cards-2">
              <div className="top-row">
              </div>
              <div className="second-row">
              </div>
            </div>
          </div>
        </div>
        <p className="advice-tips">Advice, Tips &amp; Actionable Steps</p>
        <p className="text-wrapper-5">
          All you need for job search success in one place!
        </p>
        <div className="top-nav-bar">
          <div className="top-nav-bar-2">
            <div className="text-wrapper-6">Job Quest</div>
            <div className="buttons-for-sign-up">
              <div className="buttons-mini-2" />
              {/* <ButtonsMini
                buttonsLineMini="Log Out"
                buttonsLineMiniClassName="design-component-instance-node"
                buttonsLineMiniClassNameOverride="buttons-mini-3"
                className="buttons-mini-instance"
                property1="outlined"
              /> */}
                <Buttons buttonsSolidLargeText="Log out" className="buttons-instance" property1="solid-large-blue" />

            </div>
          </div>
        </div>
        <div className="frame">
          <img
            className="image"
            alt="Image"
            src="src/assets/RoadmapImage.png"
          />
        </div>
      </div>
    </div>
  );
};
