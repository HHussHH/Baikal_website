import { db } from "../db.js";

export const smiQuery = (req, res) => {
  const q = "SELECT * FROM smi";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};
