import Image from "next/image";
import NavLogo from "/public/loginAssets/MovieIcon.png";
import { AppstoreOutlined ,PlaySquareOutlined} from "@ant-design/icons";

export default function Navbar() {
  return (
    <div>
      <div>
        <Image src={NavLogo} alt="icon" />
        <AppstoreOutlined style={{color: "white"}}/>
        <PlaySquareOutlined style={{color: "white"}}/>
  
      </div>
    </div>
  );
}
