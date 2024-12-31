function ArchiveLayout({latest, summary}){

    return(
        <div className="grid grid-rows-5 grid-cols-1 min-h-screen items-center">
            <div className="row-start-1 row-span-2 font-bold text-4xl">{latest}</div>
            <hr></hr>
            <div className="row-start-4 row-span-5 font-bold text-4xl">{summary}</div>
        </div>
    )
}

export default ArchiveLayout;