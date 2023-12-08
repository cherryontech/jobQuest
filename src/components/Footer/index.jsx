import logo from "../../assets/logo.svg";

export const Footer = () => {

  return (
    <div className="bg-[#DEE6F4] w-full py-16 px-24 absolute bottom-0">
        <div className="relative">
            <div className="mb-8">
                <img className="" alt="logo" src={logo} />
            </div>
          
          {/* container */}
          <div className=" grid "> {/* 12 columns */}
            <div> {/* 8 columns, border-right  */}
                <div>
                </div> {/* child div  */}
            </div> 
            <div></div> {/* 4 cols */}
          </div>
        </div>
    </div>
  );
};
