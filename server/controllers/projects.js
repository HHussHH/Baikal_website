import { db } from "../db.js";

export const projectQuery = (req, res) => {
  const q = "SELECT * FROM project";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};
