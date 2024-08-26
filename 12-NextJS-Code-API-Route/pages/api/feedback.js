import fs from "fs";
import path from "path";

export function buildPath(){
    return path.join(process.cwd(), "data", "feedback.json");
}

export function fileDataGet(filePath){
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    return data;
}

function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    const feedbackText = req.body.text;

    const newFeedBack = {
      id: new Date().toISOString(),
      email,
      feedbackText,
    };

    const filePath = buildPath();
    const data = fileDataGet(filePath);

    data.push(newFeedBack);

    fs.writeFileSync(filePath, JSON.stringify(data));

    return res.status(201).json({ message: "Success In", newFeedBack });

  } else if(req.method === 'GET'){

    const filePath = buildPath();
    const data = fileDataGet(filePath);
    return res.json({data});

  }
}

export default handler;
