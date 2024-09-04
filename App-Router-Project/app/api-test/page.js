"use client";

function APITestPage() {
  async function buttonHTTP() {
    const response = await fetch("/api/test/123");

    const resData = await response.json();
    console.log(resData);
  }

  async function formDataTest(e){
    e.preventDefault();

    const formData = new FormData(e.target)

    const response = await fetch('/api/test2', {
        method : 'POST',
        body : formData
    })

    const resData = await response.json();

    console.log(resData);
  }

  return (
    <>
      <div className="flex flex-col items-center mt-8 gap-3">
        <h1>API Test Page</h1>
        <button className="border-[1px] p-1 bg-red-600" onClick={buttonHTTP}>
          Test
        </button>
        <form className="flex flex-col gap-3 text-center" onSubmit={formDataTest}>
            <label htmlFor="nickname">NickName</label>
            <input type="text" id="nickname" name="nickname"></input>
            <button className="border-[1px] p-1 bg-red-500">Form Data Test</button>
        </form>
      </div>
    </>
  );
}

export default APITestPage;
