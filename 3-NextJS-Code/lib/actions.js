"use server";

import { saveMeal } from "./MealDataFetching";
import {redirect} from 'next/navigation';

function invalidValue(text){
  return !text || text.trim() === '';
}

export async function shareMeal(formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    image: formData.get("image"),
  };

  if (
    invalidValue(meal.title) ||
    invalidValue(meal.summary) ||
    invalidValue(meal.instructions) ||
    invalidValue(meal.creator) ||
    !meal.creator_email.includes('@')
  ) {
    throw new Error('Invalid Inspection Error')
  }

  await saveMeal(meal);

  redirect("/meals");
}
