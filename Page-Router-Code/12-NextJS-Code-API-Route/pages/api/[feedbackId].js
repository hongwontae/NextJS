import { buildPath, fileDataGet } from "./feedback";


function handler(req, res){
    const feedbackId = req.query.feedbackId;

    const filePath = buildPath();
    const data = fileDataGet(filePath);

    const selectedData = data.find(ele => {
        return ele.id === feedbackId
    });

    return res.status(200).json({data : selectedData});


}

export default handler;