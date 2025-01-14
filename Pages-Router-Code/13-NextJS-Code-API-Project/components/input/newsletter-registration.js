import classes from './newsletter-registration.module.css';

import {useState} from 'react';

function NewsletterRegistration() {

  const [email, setEmail] = useState('');

  async function registrationHandler(event) {
    event.preventDefault();

    const data = await fetch('http://localhost:3000/api/newsletter', {
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify({email})
    })

    const resData = await data.json();

    console.log(resData);
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
            onChange={(e)=>{
              setEmail(e.target.value);
            }}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;