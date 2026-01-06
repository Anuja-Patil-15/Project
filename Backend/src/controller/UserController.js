const db = require("../db/database");


exports.Adduser = (req, res) => {
  const { role, name, contact, email, password } = req.body;

  if (!role || !name || !contact || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const checkSql = "SELECT id FROM users WHERE email = ? AND Role = ?";
  db.query(checkSql, [email, role], (err, result) => {
    if (err) return res.status(500).json({ message: "Server error", error: err });

    if (result.length > 0) {
      return res.status(409).json({ message: "Email already exists for this role" });
    }

    const insertSql = "INSERT INTO users (Role, name, contact, email, Password) VALUES (?, ?, ?, ?, ?)";
    db.query(insertSql, [role, name, contact, email, password], (err, result) => {
      if (err) return res.status(500).json({ message: "Error adding user", error: err });

      res.status(201).json({ message: "User added successfully", userId: result.insertId });
    });
  });
};


exports.display = (req, res) => {
  const sql = "SELECT * FROM users";
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json({ message: "Error fetching users", error: err });

    res.status(200).json(result);
  });
};
