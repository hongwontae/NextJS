import sql from "better-sqlite3";
import xss from "xss";
import slugify from "slugify";
import fs from "node:fs";

const db = sql("meals.db");

export async function mealsGet() {
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals where slug = ?").get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);
  console.log(meal.slug, meal.instructions, meal.image);

  const extension = meal.image.name.split('.').pop();
  const fileName = `${meal.slug}.${extension}`; // 들어오는 title을 사용해서 파일이름으로 결정한다.

  const stream = fs.createWriteStream(`public/images/${fileName}`);

  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (err) => {
    if (err) {
      throw new Error("Saving image failed");
    }
  });

  meal.image = `/images/${fileName}`;

  db.prepare(`
        Insert into meals
        (title, summary, instructions, creator, creator_email, image, slug)
        values(        
            @title,
            @summary,
            @instructions,
            @creator,
            @creator_email,
            @image,
            @slug
         )
        `).run(meal);

}
