import fs from "node:fs/promises";
import path from "node:path";

function ProductDetailPage({ loaderProduct }) {
  if (!loaderProduct) {
    return <p>Lodaing...</p>;
  }

  return (
    <>
      <h1>Hello World</h1>
      <p>{loaderProduct.title}</p>
    </>
  );
}

async function getData() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return data;
}

export async function getStaticProps(context) {
  const { params } = context;
  console.log(params)
  const pid = params.pid;

  const data = await getData();

  const product = data.products.find((ele) => ele.id === pid);

  return {
    props: {
      loaderProduct: product,
    },
  };
}

export async function getStaticPaths() {

  const data = await getData();

  const ids = data.products.map((ele)=>{
    return ele.id
  });


  const paramsWithArray = ids.map(ele => {
    return {
      params : {pid : ele}
    }
  })


  return {
    paths: paramsWithArray,
    fallback: false,
  };
}

export default ProductDetailPage;
