export async function getOneFetch(slug) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

    const resData = await response.json();

    return resData;
}