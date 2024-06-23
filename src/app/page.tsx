"use client";
import Navbar from "@/components/navbar/Navbar";
import Carousel from "@/components/carousel/Carousel";
import styled from "styled-components";
import { CiSearch } from "react-icons/ci";
export default function Home() {
  return (
    <HomePageContainer>
      <Navbar />
      <div className="home-wrapper">
        <div className="input-container">
          <CiSearch className="input-search-icon" />
          <input type="text" placeholder="Search for movies or TV series" />
        </div>
      </div>
    </HomePageContainer>
  );
}
const HomePageContainer = styled.main`
  display: flex;

  .home-wrapper {
    display: flex;
    height: fit-content;
    padding-top: 60px;
    .input-container {
      display: flex;
      align-items: center;
      gap: 20px;
      svg {
        font-size: 40px;
        color: #fff;
        font-weight: bold;
      }
      input {
        width: 388px;
        height: 38px;
        background: transparent;
        border: none;
        outline: none;
        color: #fff;
        font-family: "Outfit", sans-serif;
        font-size: 24px;
        &::placeholder {
          color: rgba(255, 255, 255, 1);
          font-family: "Outfit", sans-serif;
          font-size: 24px;
        }
      }
    }
  }
`;
