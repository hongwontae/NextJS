function MealDetailPage({params}){

    return(
        <>
            <h1>Detail Page</h1>
            <p>{params.mealSlug}</p>
        </>
    )
}

export default MealDetailPage;