import {useRouter} from 'next/router'

function ClientProjectPage(){


    const router = useRouter();

    return(
        <>
            <div>
                <h1>ClientProjectPage</h1>
                <ul>
                    <li>{router.query.clientIden}</li>
                    <li>{router.query.clientProjectId}</li>
                </ul>
            </div>
        </>
    )
}

export default ClientProjectPage;