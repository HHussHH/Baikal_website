import { db } from "../db.js";

export const newsQuery = (req, res) => {
  const q = "SELECT * FROM news";

  db.query(q, (err, data) => {
    if (err) return res.json();

    return res.status(200).json(data);
  });
};
