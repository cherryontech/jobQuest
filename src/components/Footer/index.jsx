import logo from "../../assets/logo.svg";

export const Footer = () => {
  return (
    <div className="bg-[#DEE6F4] w-full h-96 py-8 px-16 absolute">
      <div className="relative">
        <div className="mb-5">
          <img className="" alt="logo" src={logo} />
        </div>

        {/* container */}
        <div className="grid-cols-12">
          {" "}
          {/* 12 columns */}
          <div className="grid-cols-8">
            {" "}
            {/* 8 columns, border-right  */}
            <div className="grid-cols-2 mb-7 text-primary-blue font-bold font-inter">
              For Job Seekers
            </div>
            <ol className="grid-cols-2 mb-5 text-primary-blue font-inter">
              <li>Career Advice</li> 
              <li>Job Search Guidance</li>
              <li>Your Job Profile </li>
              <li>Help</li>
            </ol>
          </div>
          <div className="grid-cols-4"></div> {/* 4 cols */}
        </div>
      </div>
    </div>
  );
};
