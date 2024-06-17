"use client";
import Image from "next/image";
import styled from "styled-components";
import LoginIcon from "/public/loginAssets/MovieIcon.png";
import { SubmitHandler, useForm } from "react-hook-form";

type LoginFormField = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const { register, handleSubmit } = useForm<LoginFormField>();

  const onSubmit: SubmitHandler<LoginFormField> = (data) => {
    console.log(data);
  };
  return (
    <LoginContainer>
      <Image src={LoginIcon} alt="hello" />
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        <div className="login-inputs">
          <input
            {...register("email")}
            type="text"
            placeholder="Email Address"
            className="login-inputs-style"
          />
          <input
            {...register("password")}
            type="password"
            placeholder="Password"
            className="login-inputs-style"
          />
        </div>
        <div className="login-buttons">
          <button type="submit" className="login-account">
            Login to your account
          </button>
          <div className="login-end-buttons">
            <button type="button" className="end-buttons-question">
              Do not have account?
            </button>
            <button type="button" className="end-buttons-sign">
              Sign up
            </button>
          </div>
        </div>
      </LoginForm>
    </LoginContainer>
  );
}

const LoginContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  gap: 82.99px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #161d2f;
  font-family: "Outfit", sans-serif;
  padding: 32px;
  border-radius: 16px;
  h1 {
    color: #ffff;
    font-size: 32px;
    font-weight: 400;
    line-height: 40.32px;
    margin-bottom: 40px;
  }
  .login-buttons {
    .login-account {
      background-color: rgba(252, 71, 71, 1);
      font-size: 15px;
      font-weight: 400;
      line-height: 18.9px;
      text-align: center;
      color: rgba(255, 255, 255, 1);
      padding: 14px 96.5px;
      outline: none;
      border: none;
      border-radius: 8px;
      margin-top: 40px;
    }
  }
  .login-inputs {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .login-inputs-style {
      background-color: #161d2f;
      outline: none;
      border: none;
      border-bottom: 1px solid #5a698f;
      color: #ffffff;
      min-height: 37px;
    }
  }
  .login-end-buttons {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 24px;

    .end-buttons-question {
      color: rgba(255, 255, 255, 1);
      font-size: 15px;
      line-height: 18.9px;
      background: none;
      border: none;
      outline: none;
      cursor: pointer;
    }

    .end-buttons-sign {
      color: rgba(252, 71, 71, 1);
      font-size: 15px;
      line-height: 18.9px;
      background: none;
      border: none;
      outline: none;
      cursor: pointer;
    }
  }
`;
