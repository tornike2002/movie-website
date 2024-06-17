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
        <div>
          <button type="submit">Login to your account</button>
          <div>
            <button>Do not have account?</button>
            <button>Sign up</button>
          </div>
        </div>
      </LoginForm>
    </LoginContainer>
  );
}

const LoginContainer = styled.section`
  min-height: 100vh;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #161d2f;
  h1 {
    color: #ffff;
  }
  .login-inputs {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .login-inputs-style {
      background-color: #161d2f;
      outline: none;
      border-bottom: 1px solid #5A698F;
      border-top: none;
      border-left: none;
      border-right: none;
      padding-bottom: 10px;
      color: #ffffff;
    }
  }
`;
