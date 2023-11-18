"use client";
import React from "react";
import { object, string } from "yup";
import { Image, Input, Button } from "@nextui-org/react";
import authBackground from "../../assets/authBackground.png";
import { useNavigate } from "react-router-dom";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";

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
  const [isVisible, setIsVisible] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [errors, setErrors] = React.useState({});
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
      result = await userSchema.validate(userInfo, { abortEarly: false });
      console.log(result);
      const email = localStorage.getItem("jobQuestEmail");
      const password = localStorage.getItem("jobQuestPassword");
      if (email === userInfo.email && password === userInfo.password) {
        navigateTo("Ratings");
      } else {
        const field = "loginFailed";
        setErrors((prev) => ({
          ...prev,
          [field]: "Incorrect Username/Password",
        }));
      }
      setIsLoading(false);
    } catch (err) {
      console.log("here");
      console.log(err.inner);
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
          height: "500px",
        }}
      >
<Button className="h-5 inline bg-transparent float-right" onClick={() => navigateTo('/')}>X</Button>
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
          isInvalid={errors.email && true}
          errorMessage={errors.email}
          type="email"
          label="Email"
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
        {errors.loginFailed && (
          <div className="text-red-500 text-right">{errors.loginFailed}</div>
        )}
        <p className="text-left m-2">
          Forgot your password? <span className="text-red-500"> Reset</span>
        </p>
        <Button
          onClick={handleSubmit}
          size="lg"
          {...(isLoading && { isLoading: true })}
          className="text-white mt-5 text-1xl font-bold"
          style={{
            backgroundColor: "#090459",
          }}
        >
          Log In
        </Button>
        <p className=" m-2">
          Need an account? <span className="text-red-500"> Create Account</span>
        </p>
      </div>
    </div>
  );
};
