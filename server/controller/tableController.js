const db = require("../db");

class TableController {
  async getAll(req, res) {
    const allRows = await db.query("SELECT * FROM tables");
    return res.json(allRows.rows);
  }

  async create(req, res) {
    const { name, date, amount, distance } = req.body;
    console.log(req.body);
    const createRow = await db.query(
      `INSERT INTO tables (name, date, amount, distance) values ($1,$2,$3,$4) RETURNING *`,
      [name, date, amount, distance]
    );
    return res.json(createRow.rows[0]);
  }
}

module.exports = new TableController();
