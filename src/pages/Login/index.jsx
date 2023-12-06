"use client";
import React from "react";
import { useNavigate } from "react-router-dom";
import { XClose } from "../../assets/XClose";
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

export const LoginPage = () => {
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
      const password = localStorage.getItem("jobQuestPassword");

      //if user credentials has not been previously stored to localStorage, store and still log them in

      if (email === result.email && password === result.password) {
        navigateTo("/roadmap");
        localStorage.setItem("loginStatus", true);
      } else {
        const field = "loginFailed";
        setErrors((prev) => ({
          ...prev,
          [field]: "Incorrect Username/Password",
        }));
        localStorage.setItem("loginStatus", false);
      }
      setIsLoading(false);
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
          className="h-5 bg-transparent float-right font-bold text-3xl"
          onClick={() => navigateTo("/")}
        >
          <XClose />
        </Button>
        <br />
        <h1
          className="text-4xl font-bold"
          style={{
            color: "#25274D",
          }}
        >
          Welcome Back!
        </h1>
        <p className="m-4">
          Each time you login -
          <br />
          you are making progress towards your goals.
        </p>

        <Input
          onChange={(e) => {
            setUserInfo((prev) => ({ ...prev, email: e.target.value }));
          }}
          value={userInfo.email}
          className="m-3"
          isRequired
          autoComplete='email'
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
          autoComplete='current-password'
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
        {errors.loginFailed && (
          <div className="text-red-500 text-right">{errors.loginFailed}</div>
        )}
        <p className="text-left m-2">
          Forgot your password?{" "}
          <span className="text-[#FF6667] cursor-pointer underline font-bold">
            {" "}
            Reset
          </span>
        </p>
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
          Need an account?{" "}
          <span
            className="text-[#FF6667] cursor-pointer underline font-bold"
            onClick={() => navigateTo("/signup")}
          >
            {" "}
            Create Account
          </span>
        </p>
      </div>
    </div>
  );
};
