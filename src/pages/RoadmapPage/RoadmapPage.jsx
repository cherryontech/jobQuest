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
                    src="https://cdn.animaapp.com/projects/652ee00b2873525a7a887798/releases/654f0413f197b5633923a301/img/line-1-1.svg"
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
                      src="https://cdn.animaapp.com/projects/652ee00b2873525a7a887798/releases/654f0413f197b5633923a301/img/line-2.svg"
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
                <img
                  className="img-2"
                  alt="Linked in"
                  src="https://cdn.animaapp.com/projects/652ee00b2873525a7a887798/releases/654f0413f197b5633923a301/img/linkedin@2x.png"
                />
                <img
                  className="img-3"
                  alt="Resume"
                  src="https://cdn.animaapp.com/projects/652ee00b2873525a7a887798/releases/654f0413f197b5633923a301/img/resume@2x.png"
                />
                <img
                  className="img-4"
                  alt="Interview"
                  src="https://cdn.animaapp.com/projects/652ee00b2873525a7a887798/releases/654f0413f197b5633923a301/img/interview@2x.png"
                />
              </div>
              <div className="second-row">
                <img
                  className="img-2"
                  alt="Portfolio"
                  src="https://cdn.animaapp.com/projects/652ee00b2873525a7a887798/releases/654f0413f197b5633923a301/img/portfolio@2x.png"
                />
                <img
                  className="img-3"
                  alt="Application"
                  src="https://cdn.animaapp.com/projects/652ee00b2873525a7a887798/releases/654f0413f197b5633923a301/img/application@2x.png"
                />
                <img
                  className="img-4"
                  alt="Job search"
                  src="https://cdn.animaapp.com/projects/652ee00b2873525a7a887798/releases/654f0413f197b5633923a301/img/job-search@2x.png"
                />
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
            src="https://cdn.animaapp.com/projects/652ee00b2873525a7a887798/releases/652ee11aca99ad1e375e6c86/img/image-2.png"
          />
        </div>
      </div>
    </div>
  );
};
