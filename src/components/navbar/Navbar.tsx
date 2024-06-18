import Image from "next/image";
import NavLogo from "/public/loginAssets/MovieIcon.png";

import { AiFillAppstore } from "react-icons/ai";
import { MdLocalMovies } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { PiTelevisionDuotone } from "react-icons/pi";
export default function Navbar() {
  return (
    <div>
      <div>
        <Image src={NavLogo} alt="icon" />
        <AiFillAppstore style={{ color: "white" }} />
        <MdLocalMovies style={{ color: "white" }} />
        <PiTelevisionDuotone style={{ color: "white" }} />
        <FaBookmark style={{ color: "white" }} />
      </div>
    </div>
  );
}
