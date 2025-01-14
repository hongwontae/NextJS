import Link from "next/link"

function ClientPage(){

    const clientData = [
        {id : 1, value : 'Max'},
        {id : 2, value : 'Hemlington'}
    ]

    return(
        <>
            <div>
                <h1>Client Page</h1>
                <ul>
                   {clientData.map((ele)=>{
                    return <li key={ele.id}>
                        <Link href={`/client/${ele.value}`}>{ele.value}</Link>
                    </li>
                   })}
                </ul>
            </div>
        </>
    )
}

export default ClientPage