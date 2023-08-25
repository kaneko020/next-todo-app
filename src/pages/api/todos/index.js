import axios from "axios";
const JSON_SERVER_URL = `${process.env.JSON_SERVER_URL}/todos`;

export default async function handler(req, res) {
  const { method, query } = req;
  try {
    if(method === "GET") {
      const result = await axios.get(JSON_SERVER_URL).then(res => res.data)
      return res.status(200).json(result)
    } else if(method === "POST") {
      const result = await axios.post(JSON_SERVER_URL, req.body).then(res => res.data);
      return res.status(200).json(result);
    } else if(method === "PUT") {
      const result = await axios.put(`${JSON_SERVER_URL}/${query.id}`, req.body).then(res => res.data);
      return res.status(200).json(result);
    } else if(method === "DELETE") {
      const result = await axios.delete(`${JSON_SERVER_URL}/${query.id}`).then(res => res.data);
      return res.status(200).json(result);
    }
  } catch {}

  return res.status(500).json({
    error: {
      status: 500,
      code: "BAD_REQUEST",
      message: "不正なリクエストです。"
    }
  })
}