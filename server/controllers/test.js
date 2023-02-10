import { db } from "../db.js";

export const testQuery = (req, res) => {
  const q = "SELECT * FROM project";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const testInst = (req, res) => {
  const q =
    "INSERT INTO `project` (`title`, `img`, `desc`, `sliderMin`, `sliderMax`, `sliderCurrent`) VALUES ('test', null,null, null, null, null);";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};
