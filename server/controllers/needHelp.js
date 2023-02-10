import { db } from "../db.js";

export const needhelpQuery = (req, res) => {
  const q = "SELECT * FROM need_help";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const getNeedhelp = (req, res) => {
  const q = "SELECT `name`,`img` FROM need_help WHERE id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};
