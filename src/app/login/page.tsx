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
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        <div>
          <input
            {...register("email")}
            type="text"
            placeholder="Email Address"
          />
          <input
            {...register("password")}
            type="password"
            placeholder="Password"
          />
        </div>
        <div>
          <button type="submit">Login to your account</button>
          <div>
            <button>Do not have account?</button>
            <button>Sign up</button>
          </div>
        </div>
      </form>
    </LoginContainer>
  );
}

const LoginContainer = styled.section`
  min-height: 100vh;
`;
