"use client";
import Image from "next/image";
import styled from "styled-components";
import LoginIcon from "/public/loginAssets/MovieIcon.png";
import { SubmitHandler, useForm } from "react-hook-form";

type SignFormField = {
  email: string;
  password: string;
  repeat: string;
};

export default function RegisterPage() {
  const { register, handleSubmit } = useForm<SignFormField>();

  const onSubmit: SubmitHandler<SignFormField> = (data) => {
    console.log(data);
  };
  return (
    <SignContainer>
      <Image src={LoginIcon} alt="hello" />
      <SignForm onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign Up</h1>
        <div className="sign-inputs">
          <input
            {...register("email")}
            type="text"
            placeholder="Email address"
            className="sign-inputs-style"
          />
          <input
            {...register("password")}
            type="password"
            placeholder="Password"
            className="sign-inputs-style"
          />
          <input
            {...register("repeat")}
            type="password"
            placeholder="Repeat password"
            className="sign-inputs-style"
          />
        </div>
        <div className="sign-buttons">
          <button type="submit" className="sign-account">
            Create an account
          </button>
          <div className="sign-end-buttons">
            <button type="button" className="end-buttons-question">
              Already have an account?
            </button>
            <button type="button" className="end-buttons-sign">
              Login
            </button>
          </div>
        </div>
      </SignForm>
    </SignContainer>
  );
}

const SignContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  gap: 82.99px;
`;

const SignForm = styled.form`
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
  .sign-buttons {
    .sign-account {
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
      cursor: pointer;
    }
  }
  .sign-inputs {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .sign-inputs-style {
      background-color: #161d2f;
      outline: none;
      border: none;
      border-bottom: 1px solid #5a698f;
      color: #ffffff;
      min-height: 37px;
    }
  }
  .sign-end-buttons {
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
