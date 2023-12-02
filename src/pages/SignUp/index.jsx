"use client";
import React from "react";
import { useNavigate } from "react-router-dom";

//for field validation
import { object, string } from "yup";

//nextUI components
import { Image, Input, Button } from "@nextui-org/react";
import { EyeFilledIcon } from "../../components/Eye/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../../components/Eye/EyeSlashFilledIcon";

import authBackground from "../../assets/authBackground.png";

let userSchema = object({
  email: string()
    .required("Username is required")
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
      "Invalid Email Format"
    )
    .label("email"),
  password: string().required("Password Is Required").label("password"),
});

export const SignupPage = () => {
  const [userInfo, setUserInfo] = React.useState({
    email: "",
    password: "",
  });

  //used to shwo or not show password.
  const [isVisible, setIsVisible] = React.useState(false);

  //form loading
  const [isLoading, setIsLoading] = React.useState(false);
  const [errors, setErrors] = React.useState({});

  //Router navigation
  const navigateTo = useNavigate();

  React.useEffect(() => {
    if (userInfo.email === "" || userInfo.password === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "",
        password: "",
      }));
    }
  }, [userInfo]);

  async function handleSubmit() {
    try {
      setIsLoading(true);
      let result = await userSchema.validate(userInfo, { abortEarly: false });

      const email = localStorage.getItem("jobQuestEmail");

      //if user credentials has not been previously stored to localStorage, store and still log them in
      if (!email) {
        localStorage.setItem("jobQuestEmail", result.email);
        localStorage.setItem("jobQuestPassword", result.password);
        localStorage.setItem("loginStatus", true);
        navigateTo("/roadmap");
      }
      //else let the user know an account already exists with the credentials they inputted.
      else {
        if (email == result.email) {
          const field = "signUpFailed";
          setErrors((prev) => ({
            ...prev,
            [field]: "An account already exists with this email address",
          }));
        } else {
          const field = "signUpFailed";
          setErrors((prev) => ({
            ...prev,
            [field]: "An account already exists",
          }));
        }
        localStorage.setItem("loginStatus", false);
        setIsLoading(false);
      }
    } catch (err) {
      for (const e of err.inner) {
        let field = e.path;
        let errmsg = e.errors[0];
        setErrors((prev) => ({ ...prev, [field]: errmsg }));
      }
      setIsLoading(false);
    }
  }

  return (
    <div>
      <Image
        src={authBackground}
        style={{
          width: "100vw",
          height: "99vh",
          position: "relative",
          zIndex: "1",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center p-10 "
        style={{
          width: "550px",
          borderRadius: "30px",
          backgroundColor: "#EFF2F9",
          height: "fit-content",
        }}
      >
        <Button
          className="h-5 inline bg-transparent float-right font-bold text-1xl"
          onClick={() => navigateTo("/")}
        >
          X
        </Button>
        <br />
        <h1
          className="text-4xl font-bold"
          style={{
            color: "#25274D",
          }}
        >
          Create An Account
        </h1>
        <p className="m-4">
          Create an account to keep track of
          <br />
          your job search journey - for free!{" "}
        </p>

        <Input
          onChange={(e) => {
            setUserInfo((prev) => ({ ...prev, email: e.target.value }));
          }}
          value={userInfo.email}
          className="m-3"
          isRequired
          isInvalid={errors.email && true}
          errorMessage={errors.email}
          type="email"
          label="Email Address"
        />

        <Input
          onChange={(e) => {
            setUserInfo((prev) => ({ ...prev, password: e.target.value }));
          }}
          value={userInfo.password}
          className="m-3"
          isRequired
          isInvalid={errors.password && true}
          errorMessage={errors.password}
          label="Password"
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={() => setIsVisible(!isVisible)}
            >
              {isVisible ? (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
        />
        {errors.signUpFailed && (
          <div className="text-red-500 text-right">{errors.signUpFailed}</div>
        )}

        <Button
          onClick={handleSubmit}
          size="lg"
          {...(isLoading && { isLoading: true })}
          className="text-white mt-5 text-3xl font-bold w-3/4 p-5 h-15"
          style={{
            backgroundColor: "#090459",
          }}
        >
          Log In
        </Button>
        <p className=" m-2">
          Already have an account?{" "}
          <span
            className="text-[#FF6667] cursor-pointer underline font-bold"
            onClick={() => navigateTo("/login")}
          >
            {" "}
            Log In
          </span>
        </p>
      </div>
    </div>
  );
};
