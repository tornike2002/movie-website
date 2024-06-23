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

const Slider = styled.div``
 