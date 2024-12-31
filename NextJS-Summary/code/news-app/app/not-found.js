function RootNotFound(){

    return(
        <>
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
                <div className="col-span-2 text-center font-bold text-4xl">Not-Found</div>
                <div className="col-span-4 text-center text-2xl">요청한 리소스를 찾을 수 없습니다.</div>
            </div>
        </>
    )
}

export default RootNotFound;