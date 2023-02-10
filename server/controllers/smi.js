import { db } from "../db.js";

export const smiQuery = (req, res) => {
  const q = "SELECT * FROM smi";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const getSmi = (req, res) => {
  const q = "SELECT * FROM smi WHERE id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};
