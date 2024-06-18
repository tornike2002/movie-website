"use client";

import Image from "next/image";
import NavLogo from "/public/loginAssets/MovieIcon.png";
import profileIcon from "/public/navbarAssets/Oval.png";
import { AiFillAppstore } from "react-icons/ai";
import { MdLocalMovies } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { PiTelevisionDuotone } from "react-icons/pi";
import styled from "styled-components";
export default function Navbar() {
  return (
    <NavbarContainer>
      <div className="Navlinks-wrapper">
        <Image src={NavLogo} alt="icon" />
        <AiFillAppstore className="nav-icons" />
        <MdLocalMovies className="nav-icons" />
        <PiTelevisionDuotone className="nav-icons" />
        <FaBookmark className="nav-icons" />
      </div>
      <Image src={profileIcon} alt="profile" />
    </NavbarContainer>
  );
}

const NavbarContainer = styled.nav`
  background-color: rgba(22, 29, 47, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 32px;
  min-height: 100vh;
  width: 96px;
  margin: 32px;
  border-radius: 18px;
  .Navlinks-wrapper {
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    padding-top: 35px;
    color: rgba(90, 105, 143, 1);
  }
  .nav-icons {
    width: 60px;
    height: 20px;
    cursor: pointer;
    transition: all 500ms ease;
  }
  .nav-icons:hover {
    color: rgba(252, 71, 71, 1);
  }
`;
