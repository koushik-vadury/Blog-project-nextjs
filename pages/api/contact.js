import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }
    const newMessage = {
      name,
      email,
      message,
    };
    let client;
    try {
      client = await MongoClient.connect(process.env.MONGO_DB_URL);
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database!" });
      return;
    }

    const db = client.db();
    try {
      await db.collection("messages").insertOne(newMessage);
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Could not insert data to database!" });
      return;
    }

    client.close();
    res
      .status(201)
      .json({ message: "Successfully stored message", email, name, message });
  }
};

export default handler;
