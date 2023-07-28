import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/shared/logo.svg";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-logo">
        <Image src={ logo } alt="logo" />
      </div>

    
      <div className="nav-links">
        < Link href="/" > 00 HOME </Link>
        < Link href="/destination" > 01 DESTINATION </Link>
        < Link href="/crew" > 02 CREW </Link>
        < Link href="/technology" > 03 TECHNOLOGY </Link>

        <div className="linha">
          <hr/>
        </div>

      </div>

    </nav>
  );
};

export default Navbar;