import { hashPassword } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !password ||
      password.trim().length === 0
    ) {
      return res.json({ message: "Invalid Input Data" });
    }

    const clinet = await connectToDatabase();
    const db = clinet.db();

    const exsitingEmail = await db.collection('users').findOne({email});

    if(exsitingEmail){
      clinet.close();
      return res.status(422).json({message : '동일 이메일 존재'})
    }

    const HP = await hashPassword(password);

    const result = await db.collection("users").insertOne({
      email,
      password: HP,
    });

    clinet.close();

    res.status(201).json({ message: "Success stored!", result });
  }
}

export default handler;
