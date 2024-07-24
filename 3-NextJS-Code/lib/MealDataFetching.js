import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function mealsGet(){
    await new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve()
        }, 5000)
    })
    return db.prepare('SELECT * FROM meals').all();
}