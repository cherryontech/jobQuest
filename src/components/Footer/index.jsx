import logo from "../../assets/logo.svg";

export const Footer = () => {
  return (
    <div className="bg-[#DEE6F4] w-full h-96 py-8 px-16 absolute">
      <div className="absolute">
        <div className="mb-8">
          <img className="" alt="logo" src={logo} />
        </div>

        {/* container */}
        <div className="grid grid-cols-12 col-span-12">
          {" "}
          {/* 12 columns */}
          <div className="grid grid-cols-8 col-span-8 gap-2 border-r-8 border-primary-blue">
            {" "}
            {/* 8 columns, border-right  */}
            <div>
              <div className="grid col-start-1 col-span-2 col-end-3 text-primary-blue font-bold font-inter">
                For Job Seekers
              </div>
              <ol className="grid col-start-1 col-span-2 col-end-3 text-primary-blue font-inter">
                <li>Career Advice</li>
                <li>Job Search Guidance</li>
                <li>Your Job Profile </li>
                <li>Help</li>
              </ol>
              <div className="grid col-start-1 col-span-2 col-end-3 text-primary-blue font-inter mt-6">
               Copyright 2023
              </div>
            </div>
            <div>
              <div className="grid col-start-3 col-span-2 col-end-5 text-primary-blue font-bold font-inter">
                User Accounts
              </div>
              <ol className="grid col-start-3 col-span-2 col-end-5 text-primary-blue font-inter">
                <li>About User Accounts</li>
                <li>Login</li>
                <li>Signup</li>
              </ol>
              <div className="grid col-start-3 col-span-2 col-end-5 text-primary-blue font-inter mt-12">
                Privacy Policy
              </div>
            </div>
            <div>
              <div className="grid col-start-5 col-span-2 col-end-7 text-primary-blue font-bold font-inter">
                Help
              </div>
              <ol className="grid col-start-5 col-span-2 col-end-7 text-primary-blue font-inter">
                <li>About Us</li>
                <li>Terms of User</li>
                <li>FAQs</li>
                <li>Contact Us</li>
              </ol>
              <div className="grid col-start-5 col-span-2 col-end-7 text-primary-blue font-inter mt-12">
                Terms of Use
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 col-span-4">
            
          </div>
        </div>
      </div>
    </div>
  );
};
