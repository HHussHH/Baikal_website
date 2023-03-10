import { db } from "../db.js";

export const contactsQuery = (req, res) => {
  const q = "SELECT * FROM contacts";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};
