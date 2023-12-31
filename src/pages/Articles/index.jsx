import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Image,
  ScrollShadow,
} from "@nextui-org/react";

import articles from "./articles.json";
import "./articles.css";

export default function Articles() {
  const navigateTo = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("jobQuestEmail")) {
          navigateTo("/login");
        }
    }, [])
    
  return (
    <div className="p-10 mt-20" style={{ backgroundColor: "#D9E2F3" }}>
      <div className="w-4/6 m-auto ">
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
            onClick={() => navigateTo("/free-flowing/linkedin")}
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
        className="w-4/6 m-auto bg-white p-10"
        style={{ borderRadius: "30px" }}
      >
        <h1 className="text-4xl font-bold text-[#25274D] my-8 ml-7">
          LinkedIn Profile
        </h1>
        <ScrollShadow size={30} className="articles">
          {articles.map((article, index) => (
            <Card key={index} className="w-[360px] max-w-[400px] m-5 ">
              <CardHeader className="m-0 max-h-[250px] p-0">
                <Image radius="none" src={article.image} />
              </CardHeader>
              <Divider />
              <CardBody>
                <p className="text-2xl font-bold text-[#25274C]">
                  {article.title}
                </p>
                <span className="text-[#78858F]">{article.writer}</span>
                <br />
                <p className="text-[#25274C]">
                  {article.quote}{" "}
                  <a href={article.link} className="text-danger cursor-pointer" target="_blank" rel="noreferrer">
                    {article.clickable}
                  </a>
                </p>
              </CardBody>
            </Card>
          ))}
        </ScrollShadow>
      </div>
    </div>
  );
}
