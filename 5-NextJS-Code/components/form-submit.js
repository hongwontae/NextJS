'use client'

import { useFormStatus } from "react-dom";

function FormSubmit() {
  const {pending} = useFormStatus();

  if(pending){
    return <p>Waiting Post</p>
  }

  return (
    <>
      <button type="submit">Send</button>
    </>
  );
}

export default FormSubmit;
