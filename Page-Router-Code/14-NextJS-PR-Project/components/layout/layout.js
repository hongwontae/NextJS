import MainNavigation from "./MainNavigation";

function Layout({ children }) {
  return (
    <>
      <MainNavigation></MainNavigation>
      <main>{children}</main>
    </>
  );
}

export default Layout;
