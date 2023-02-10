import { db } from "../db.js";

export const wethankedQuery = (req, res) => {
  const q = "SELECT * FROM we_thanked";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const getWethanked = (req, res) => {
  const q = "SELECT * FROM we_thanked WHERE id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};
