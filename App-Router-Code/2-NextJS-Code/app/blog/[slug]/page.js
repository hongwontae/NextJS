function BlogPage({params}){

    console.log(params);

    return(
        <>
            <main>
                <h1>The Blog</h1>
                <p>{params.slug}</p>
            </main>
        </>
    )
}

export default BlogPage;