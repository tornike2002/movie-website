"use client"
import Navbar from "@/components/navbar/Navbar";
import Carousel from "@/components/carousel/Carousel";
import styled from "styled-components";

export default function Home() {
  return (
    <HomePageContainer>
      <Navbar />
      <Carousel />
    </HomePageContainer>
  );
}
const HomePageContainer = styled.main`
  display: flex;
`;
