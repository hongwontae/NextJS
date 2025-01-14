import Link from 'next/link';
import fs from 'node:fs/promises';
import path from 'node:path';

function HomePage({ products }) {
  console.log('HomePage')
  return (
    <>
      <h1>Home Page</h1>
      <ul>
        {products.map((ele) => {
          return <li key={ele.id}>
            <Link href={`/${ele.id}`}>{ele.title}</Link>
          </li>;
        })}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData =  await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      products : data.products
    },
    revalidate : 10
  };
}

export default HomePage;
