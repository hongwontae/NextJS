function ArchiveLayout({ archive, latest }) {

  return (
    <>
      <h1>News Archive</h1>
      <section id="archive-filter">{archive}</section>
      <section id="arcive-latest">{latest}</section>
    </>
  );
}

export default ArchiveLayout;
