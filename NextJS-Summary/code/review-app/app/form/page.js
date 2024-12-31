"use client";
import { useActionState } from "react";
import { actionHandler } from "./server-action";
function FormTest() {

  const [state, formAction] = useActionState(actionHandler, {message : null});

  return (
    <>
      <form
        className="flex flex-col justify-center items-center text-black"
        action={formAction}
      >
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name"></input>
        <label htmlFor="age">Age</label>
        <input type="text" id="age" name="age"></input>

        <button type="submit" className="border-[1px] mt-4 p-2 rounded-lg">
          Click
        </button>
        {state.message && state.message}
      </form>
    </>
  );
}

export default FormTest;
