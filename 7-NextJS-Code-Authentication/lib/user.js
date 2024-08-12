import db from "./db";

export function createUser(email, password) {
  const result =  db.prepare("INSERT INTO users (email, password) values (?, ?)").run(
    email,
    password
  );
  return result.lastInsertRowid;
}

export function getUserByEmil(email){
  return db.prepare('SELECT * FROM users where email = ?').get(email);
}
