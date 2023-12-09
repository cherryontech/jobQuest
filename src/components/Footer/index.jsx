import logo from "../../assets/logo.svg";
import mail from "../../assets/mail.png";
import address from "../../assets/address.png";
import social from "../../assets/social.svg";
import social1 from "../../assets/social1.svg";
import social2 from "../../assets/social2.svg";
import social3 from "../../assets/social3.svg";

export const Footer = () => {
  return (
    <div className="bg-[#B2BFD6] w-full h-[700px] pt-[95.41px] pb-[68px] pl-[115px] pr-[117px] py-8 px-16 absolute top-[1480px] inline-flex">
      <div className="w-[1208px] h-[600.59px] relative">
        <div className="mb-16">
          <img className="" alt="logo" src={logo} />
        </div>

        <div className="grid grid-cols-12 gap-24 divide-x">

          <div className="col-start-1 col-span-2 text-primary-blue font-inter">
              <div className="font-bold text-lg">
                For Job Seekers
              </div>
              <ol className="text-sm leading-8 mt-4">
                  <li>Career Advice</li>
                  <li>Job Search Guidance</li>
                  <li>Your Job Profile </li>
                  <li>Help</li>
              </ol>
          </div>

          <div className="col-start-3 col-span-2 text-primary-blue font-inter">
              <div className="font-bold text-lg">
                User Accounts
              </div>
              <ol className="text-sm leading-8 mt-4">
                  <li>About User Accounts</li>
                  <li>Login/Sign-up</li>
              </ol>
          </div>

          <div className="col-start-5 col-span-2 text-primary-blue font-inter">
              <div className="font-bold text-lg">
                Help
              </div>
              <ol className="text-sm leading-8 mt-4">
                  <li>About Us</li>
                  <li>Terms of User</li>
                  <li>FAQs</li>
                  <li>Contact Us</li>

              </ol>
          </div>

          <div className="inline-block h-[320px] min-h-[1em] w-0.5 self-stretch bg-[#D6D8DE] absolute left-[778px] opacity-50"></div>
          
          {/* Few things in footer don't make sense like subscribe button, figma's mail, social media icons, playstore buttons" */}
          <div className="col-start-9 col-span-4 text-primary-blue font-inter">
              <div className="font-bold text-lg">
                Contact Us
            </div>
              <ol className="text-sm mt-4 leading-6">
              <li className="justify-start items-center gap-[13px] inline-flex"><img src={address} className="w-6 h-6 relative" />
                <p className="w-[214px] h-[38px] pr-[11px] py-0.5 justify-start items-center inline-flex">Wisconsin Ave, Suite 700 Chevy Chase, Maryland 20815</p>
              </li>
              <li className="mt-5"><img src={mail} className="w-6 h-6 relative flex-col justify-start items-start inline-flex mr-[13px]" />
                <p className="w-[149px] h-5 pl-px pr-3.5 pt-px pb-0.5 justify-start items-center inline-flex">support@figma.com</p>
              </li>
              <li className="border-4 border-primary-blue w-[150px] h-[30px] px-[26px] py-[5px] bg-white rounded-[5px] shadow justify-center items-center gap-2.5 inline-flex mt-10 text-sm">
                <div className="text-center text-indigo-950 text-base font-normal text-sm">Subscribe</div>
              </li>
            </ol>
            <div className="font-bold text-base mt-16 mb-3">
                Follow us
            </div>
            <div className="w-36 h-6 justify-start items-start gap-4 inline-flex">
              <div className="w-6 h-6 relative">
                <img src={social} />
              </div>
              <div className="w-6 h-6 relative">
              <img src={social1} />
              </div>
              <div className="w-6 h-6 relative">
              <img src={social2} />
              </div>
              <div className="w-6 h-6 relative">
              <img src={social3} />
              </div>
            </div>
          </div>

          <hr className="h-0.5 w-[1206px] border-t-0 bg-[#D6D8DE] opacity-50" />

          <div className="grid col-start-1 col-span-7 text-primary-blue font-inter text-sm -mt-10">
          <ul className="flex flex-wrap">
              <li className="me-4 hover:underline md:me-6">© 2023 All Rights Reserved</li>
              <li className="me-4 hover:underline md:me-6">Privacy Policy</li>
              <li className="me-4 hover:underline md:me-6">Terms of Use</li>
              <li className="me-4 hover:underline md:me-6">Sales and Refunds</li>
              <li className="me-4 hover:underline md:me-6">Legal</li>
              <li className="me-4 hover:underline md:me-6">Sitemap</li>
          </ul>
          </div>
           
            
        </div>
      </div>
    </div>
    
  );
};
