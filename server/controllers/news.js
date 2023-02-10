import { db } from "../db.js";

export const newsQuery = (req, res) => {
  const q = "SELECT * FROM news";

  db.query(q, (err, data) => {
    if (err) return res.json();

    return res.status(200).json(data);
  });
};

export const getNews = (req, res) => {
  const q = "SELECT * FROM news WHERE id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};
