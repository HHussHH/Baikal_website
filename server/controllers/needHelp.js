import { db } from "../db.js";

export const needhelpQuery = (req, res) => {
  const q = "SELECT * FROM need_help";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};
