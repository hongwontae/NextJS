import Link from "next/link";

function TestPage(){

    return(
        <>
            <h1>TestPage</h1>
            <Link href={'/test/123'}>Image</Link>
        </>
    )
}

export default TestPage;