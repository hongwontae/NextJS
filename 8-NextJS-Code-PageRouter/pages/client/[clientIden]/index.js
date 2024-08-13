import Link from "next/link";
import { useRouter } from "next/router";


function ClientIdenPage(){
    const router = useRouter();
    console.log(router.query)
    return(
        <>
    <div>
        <h1>Cleint Idne's = {router.query.clientIden}</h1>

        <ul>
            <li><Link href={{
                pathname : `/client/${router.query.clientIden}/1`
            }}>1page</Link></li>
        </ul>
    </div>
        </>
    )
}

export default ClientIdenPage;