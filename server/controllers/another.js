import { db } from "../db.js";

export const anotherQuery = (req, res) => {
  const q = "SELECT * FROM another";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};
