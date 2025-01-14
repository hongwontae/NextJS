import { useRef, useState } from "react";

function HomePage() {
  const [item, setItem] = useState([]);
  console.log(item)

  const emailRef = useRef(null);
  const feedRef = useRef(null);

  async function submitForHandler(e) {
    e.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredFeed = feedRef.current.value;

    const response = await fetch("http://localhost:3000/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: enteredEmail, text: enteredFeed }),
    });

    const resData = await response.json();
    console.log(resData);
  }

  async function getData() {
    const data = await fetch("http://localhost:3000/api/feedback");
    const resData = await data.json();
    setItem(resData.data);
  }

  return (
    <>
      <div>
        <h1>The Home Page</h1>
        <form onSubmit={submitForHandler}>
          <div>
            <label htmlFor="email">Your Email Address</label>
            <input type="email" id="email" ref={emailRef}></input>
          </div>
          <div>
            <label htmlFor="feedback">Your Feedback</label>
            <textarea id="feedback" rows={5} ref={feedRef}></textarea>
          </div>
          <button type="submit">Button</button>
        </form>
        <hr></hr>
        <button onClick={getData}>Load FeedBack</button>
        <ul>{item && item.map((ele) => {
          return <li key={ele.id}>{ele.feedbackText}</li>
        })}</ul>
      </div>
    </>
  );
}

export default HomePage;
