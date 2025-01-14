"use server";

import { addMessage } from "@/lib/messages";
import { redirect } from "next/navigation";

export async function createMessage(prevState, formData) {
  const message = formData.get("message");

  let errors = [];

  if (!message || message.length < 3) {
    errors.push("Length is not enough");
  }

  if (errors.length !== 0) {
    return { errors };
  }

  addMessage(message);
  redirect("/messages");
}
