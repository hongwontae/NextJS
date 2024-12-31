function RecommendAll({params}){

    const slug = params.slug;

    let arrSlug = [];

    if(slug){
      slug.map((ele)=>{
        arrSlug.push(ele)
      }) 
    } 

    console.log(arrSlug)
    
    

    return(
        <>
        <div className="text-center text-3xl">Hello-World</div>
        {arrSlug.map((ele)=>{
            return <div key={ele}>{ele}</div>
        })}
        </>
    )
}

export default RecommendAll;