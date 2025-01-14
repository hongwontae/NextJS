import Link from "next/link";

export default function HomePage() {

  console.log('HomePage')

  return (
    <>
      <div>
        <h1>Hello-World</h1>
        <ul>
          <li><Link href='/portfolio'>PortFolio</Link></li>
          <li><Link href='/client'>Client</Link></li>
        </ul>
      </div>
    </>
  );
}
