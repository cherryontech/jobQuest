import { Buttons } from "../../components/Buttons";
import "./style.css";
import finalHomepage from "../../assets/finalHomepage.png"
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const navigateTo = useNavigate()

  return (
    <div className="landing-page">
      <div className="div">
        <div className="overlap">
          <div className="landing-section">
            <img className="image" alt="Image" src={finalHomepage} />
            <div className="overlap-group">
              <p className="p">Join for free in order to save your progress and keep track of your tasks.</p>
            </div>
            <p className="text-wrapper-2">Your path to employment: streamlined job search guidance</p>
            <p className="text-wrapper-3">Feeling overwhelmed with job searching?</p>
          </div>
          <Buttons
            clickHandler={()=> navigateTo('/roadmap')}
            buttonsSolidLargeText="Start Now"
            extraClasses="buttons-instance"
            property1="solid-large-blue"
          />
        </div>
      </div>
    </div>
  );
};
