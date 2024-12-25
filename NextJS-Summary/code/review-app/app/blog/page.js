import Link from "next/link";

function Blog() {
  return (
    <>
      <div className="flex items-center flex-col">
        <h1>Blog</h1>
        <Link href={"/blog/post-1"}>Post-1</Link>
        <Link href={"/blog/post-2"}>Post-2</Link>
      </div>
    </>
  );
}

export default Blog;
