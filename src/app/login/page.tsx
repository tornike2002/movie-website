"use client";
import Image from "next/image";
import styled from "styled-components";
import LoginIcon from "/public/loginAssets/MovieIcon.png";
export default function LoginPage() {
  return (
    <LoginContainer>
      <Image src={LoginIcon} alt="hello" />
      <div>
        <h1></h1>
        <div>
          <input type="text" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <div>
          <button>Login to your account</button>
          <div>
            <button>Do not have account?</button>
            <button>Sign up</button>
          </div>
        </div>
      </div>
    </LoginContainer>
  );
}

const LoginContainer = styled.section`
  min-height: 100vh;
`;
