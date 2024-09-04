import { getOneFetch } from "@/lib/data-fetching-test";

async function BlogPage({ params }) {
  const slug = params.slug;

  const data = await getOneFetch(slug);

  return (
    <>
      <div className="mt-6 flex flex-col gap-4 items-center text-center">
        <h1>{data.title}</h1>
        <p className="max-w-5xl">{data.body}</p>
      </div>
    </>
  );
}

export default BlogPage;
