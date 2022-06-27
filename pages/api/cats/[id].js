import { cats } from "../../../data"; //cats here is an object that is why it is destructured

export default function handler(req, res) {
  const { id } = req.query;
  const cat = cats.find((cat) => cat.id === Number(id));

  res.status(200).json(cat);
}
