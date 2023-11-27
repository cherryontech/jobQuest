import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";
export default function Articles() {
  const navigateTo = useNavigate();

  return (
    <div className="p-10 h-screen" style={{ backgroundColor: "#D9E2F3" }}>
      <div className="w-4/5 m-auto px-20">
        <p className=" text-gray opacity-50 mb-10">
          <span
            className="hover:text-[#FF6667] hover:opacity-100 hover:cursor-pointer"
            onClick={() => navigateTo("/")}
          >
            Home
          </span>{" "}
          /{" "}
          <span
            className="hover:text-[#FF6667] hover:opacity-100 hover:cursor-pointer"
            onClick={() => navigateTo("/roadmap")}
          >
            Linear Path
          </span>{" "}
          /{" "}
          <span
            className="hover:text-[#FF6667] hover:opacity-100 hover:cursor-pointer"
            onClick={() => navigateTo("/linkedin")}
          >
            LinkedIn
          </span>
        </p>
        <br />
        <h1 className="text-4xl font-bold mb-1" style={{ color: "#2C2C2C" }}>
          What makes a strong LinkedIn Profile?
        </h1>
        <p className="mb-10" style={{ fontSize: "120%" }}>
          Let's research how you can make a powerful first impression!
        </p>
      </div>

      <div
        className="w-5/6 m-auto bg-white p-2 flex wrap-2"
        style={{ borderRadius: "30px" }}
      >
        <Card className="max-w-[400px]">
          {/* <CardHeader className=""> */}
            <Image
              alt="nextui logo"
            //   height={40}
            //   radius="sm"
              src="https://inspirationseek.com/wp-content/uploads/2016/02/Cute-Dog-Photo.jpg"
            //   width={40}
            // className="obje"
            style={{objectFit: 'fill'}}
            />
           
          {/* </CardHeader> */}
          <Divider />
          <CardBody>
            <p>Make beautiful websites regardless of your design experience.</p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
