import { getMeal } from "@/lib/MealDataFetching";
import classes from "./page.module.css";
import Image from "next/image";

function MealDetailPage({ params }) {
  const meal = getMeal(params.mealSlug);

  meal.instructions = meal.instructions.replace(/\n/g, '<br/>');

  console.log(params.mealSlug);

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
            <Image src={meal.image} fill></Image>
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto : ${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions
          }}
        ></p>
      </main>
    </>
  );
}

export default MealDetailPage;
