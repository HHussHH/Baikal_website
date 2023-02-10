import { db } from "../db.js";

export const projectQuery = (req, res) => {
  const q = "SELECT * FROM project";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const getProject = (req, res) => {
  const q = "SELECT * FROM project WHERE id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};
