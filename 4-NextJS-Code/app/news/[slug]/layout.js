function LayoutPage({ children, modal }) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}

export default LayoutPage;
