import Image from "next/image";
import NavLogo from "/public/loginAssets/MovieIcon.png";
export default function Navbar() {
  return (
    <div>
      <Image src={NavLogo} alt="icon" />
    </div>
  );
}
