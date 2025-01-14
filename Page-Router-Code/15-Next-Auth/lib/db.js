import { MongoClient } from "mongodb";

const MongoURL = "mongodb+srv://feelchok1234:q2tlxm123@cluster0.o4tlmsf.mongodb.net/auth-demo?retryWrites=true&w=majority&appName=Cluster0"

export async function connectToDatabase() {
  const client = await MongoClient.connect(MongoURL);

  return client;
}
