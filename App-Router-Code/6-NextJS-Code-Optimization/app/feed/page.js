import Posts from '@/components/posts';
import { getPosts } from '@/lib/posts';


export async function generateMetadata(){
  const data = await getPosts();
  const numberOfData = data.length;
  return {
    title : `There is ${numberOfData} element in this Page`,
    description : 'Hello-My-Page'
  }
}


export default async function FeedPage() {

  const posts = await getPosts();
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}
