"use client"

import styled from "styled-components";
import Image from "next/image";
import slider1 from "/public/carouselAssets/carousel1.png";
import slider2 from "/public/carouselAssets/carousel2.png";
import slider3 from "/public/carouselAssets/carousel3.png";
import slider4 from "/public/carouselAssets/carousel4.png";
import slider5 from "/public/carouselAssets/carousel5.png";
export default function Carousel() {
  return (
    <Slider>
      <div className="slide-track">
        <div className="slide">
          <Image src={slider1} alt="carousel items" />
        </div>
        <div className="slide">
          <Image src={slider2} alt="carousel items" />
        </div>
        <div className="slide">
          <Image src={slider3} alt="carousel items" />
        </div>
        <div className="slide">
          <Image src={slider4} alt="carousel items" />
        </div>
        <div className="slide">
          <Image src={slider5} alt="carousel items" />
        </div>
      </div>
    </Slider>
  );
}

const Slider = styled.div`
  height: 250px;
  margin: auto;
  position: relative;
  width: 90%;
  display: grid;
  place-items: center;
  overflow: hidden;

  .slide-track {
    display: flex;
    width: calc(250px * 18);
    animation: scroll 40s linear infinite;
  }
  .slide {
    height: 200px;
    width: 476px;
    display: flex;
    align-items: center;
    padding: 15px;
    perspective: 100px;
    img {
      width: 100%;
      transition: transform 1s;
    }
    img:hover {
      transform: translateZ(5px);
    }
  }
  @keyframes scroll {
    0% {
      transform: translate(0);
    }
    100% {
      transform: translateX(calc(-250px * 3));
    }
  }

  &::before,
  &::after {
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 1),
      0%,
      rgba(255, 255, 255, 0) 100%
    );
    content: "";
    height: 100%;
    position: absolute;
    width: 15%;
    z-index: 2;
  }
  &::before {
    left: 0;
    top: 0;
  }
  &::after {
    right: 0;
    top: 0;
    transform: rotateZ(100deg);
  }
`;
