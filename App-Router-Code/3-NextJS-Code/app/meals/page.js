import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { mealsGet } from "@/lib/MealDataFetching";
import { Suspense } from "react";

async function Meals() {
  const data = await mealsGet();

  return (
    <>
      <MealsGrid meals={data}></MealsGrid>
    </>
  );
}

function Home() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipe and cook it yourself. It is easy..</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Hello-Wolrd</p>}>
          <Meals></Meals>
        </Suspense>
      </main>
    </>
  );
}

export default Home;
