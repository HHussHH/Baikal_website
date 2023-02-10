import { db } from "../db.js";

export const wethankQuery = (req, res) => {
  const q = "SELECT * FROM we_thank";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};
