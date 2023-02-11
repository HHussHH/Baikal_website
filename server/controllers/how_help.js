import { db } from "../db.js";

export const howhelpQuery = (req, res) => {
  const q = "SELECT * FROM how_help";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};
