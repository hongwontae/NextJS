'use client'

import FormSubmit from "./form-submit";
import {useFormState} from 'react-dom'

function FormPage({ createMessage }) {
    
  const [state, formAction] = useFormState(createMessage, {});
  

  return (
    <>
      <form action={formAction}>
        <p className="form-control">
          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" rows="5" />
        </p>

        <p className="form-actions">
          <FormSubmit></FormSubmit>
        </p>
        {state.errors && <ul className="form-errors">
            {state.errors.map(err => {
                return <li key={err}>{err}</li>
            })}
            </ul>}
      </form>
    </>
  );
}

export default FormPage;
