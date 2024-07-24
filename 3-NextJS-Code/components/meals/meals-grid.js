import MealItem from "./meal-item";
import classes from "./meals-grid.module.css";

export default function MealsGrid({ meals }) {
  return (
    <>
      <ul className={classes.meals}>
        {meals && meals.map((meal) => {
          return (
            <li key={meal.id}>
              <MealItem {...meal}></MealItem>
            </li>
          );
        })}
      </ul>
    </>
  );
}
