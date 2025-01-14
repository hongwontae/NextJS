import Link from "next/link";
import logoImg from "../../assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import Background from "./Background";
import NavLink from "./NavLink";

function Header() {


  return (
    <>
      <Background></Background>

      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logoImg} alt="Hello" priority></Image>
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href={"/meals"}>Meals</NavLink>
            </li>
            <li>
              <NavLink href={"/community"}>Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
