'use client';

function FilterErrorPage({error}){

    return(
        <>
            <h2>Occurred Error</h2>
            <p>{error.message}</p>
        </>
    )
}

export default FilterErrorPage;