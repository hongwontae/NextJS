import Link from "next/link";

import { useSession, signOut } from "next-auth/react";

import classes from "./main-navigation.module.css";

function MainNavigation() {
  const {status} = useSession();

  function logoutHandler() {
    signOut();
  }

  return (
    <header className={classes.header}>
      <Link href="/">
        <div className={classes.logo}>Next Auth</div>
      </Link>
      <nav>
        <ul>
          <li>
            {status === "unauthenticated" || status === "loading" ? (
              <Link href="/auth">Login</Link>
            ) : null}
          </li>
          <li>
            {status === "unauthenticated" || status === "loading" ? null : (
              <Link href="/profile">Profile</Link>
            )}
          </li>
          <li>
            {status === "authenticated" ? (
              <button onClick={logoutHandler}>Logout</button>
            ) : null}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
