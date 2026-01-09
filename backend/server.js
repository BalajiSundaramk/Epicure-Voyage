import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Tour Booking API is running");
});

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,

  waitForConnections: true,
  connectionLimit: 10,
  connectTimeout: 30000,
  enableKeepAlive: true,

  ssl: {
    rejectUnauthorized: false
  }
});

pool.query("SELECT 1", (err) => {
  if (err) console.error("❌ pool.connection failed:", err);
  else console.log("✅ MySQL pool connected");
});

app.get("/api/bookings", (req, res) => {
  pool.query("SELECT * FROM bookings ORDER BY booking_date DESC", (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.post("/api/bookings", (req, res) => {
  console.log("BACKEND BODY:", req.body);

  const {
    customerId,
    tourId,
    tourPackage,
    visitDate,
    proofType,
    proofNumber,
    paymentMethod,
    amountPaid
  } = req.body;

  const sql = `
    INSERT INTO bookings
    (customer_id, tour_id, tour_package, visit_date, proof_type, proof_number, payment_method, amount_paid, booking_status)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'Pending')
  `;

  pool.query(sql,
    [customerId, tourId, tourPackage, visitDate, proofType, proofNumber, paymentMethod, amountPaid],
    (err, result) => {
      if (err) {
        console.error("MYSQL ERROR:", err);
        return res.status(500).json({ error: err.sqlMessage });
      }

      res.status(201).json({
        message: "Booking successful",
        bookingId: result.insertId
      });
    }
  );
});

app.get("/api/admin/stats", (req, res) => {
  const sql = `
    SELECT 
      COUNT(*) AS total,
      SUM(booking_status='Confirmed') AS confirmed,
      SUM(booking_status='Pending') AS pending,
      SUM(booking_status='Cancelled') AS cancelled
    FROM bookings
  `;

  pool.query(sql, (err, rows) => {
    if (err) return res.status(500).json({ error: "Failed to fetch stats" });
    res.json(rows[0]);
  });
});

app.get("/api/my-bookings/:userId", (req, res) => {
  const userId = req.params.userId;

  const sql = `
    SELECT booking_id, tour_package, visit_date, payment_method,
           amount_paid, booking_status, booking_date
    FROM bookings
    WHERE customer_id = ?
    ORDER BY booking_date DESC
  `;

  pool.query(sql, [userId], (err, rows) => {
    if (err) return res.status(500).json({ error: "Failed to fetch bookings" });
    res.json(rows);
  });
});

app.put("/api/bookings/:id/status", (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const query = `
    UPDATE bookings
    SET booking_status = ?
    WHERE booking_id = ?
  `;

  pool.query(query, [status, id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Status updated successfully" });
  });
});


app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT user_id, name, email, role FROM users WHERE email=? AND password=?";
  pool.query(sql, [email, password], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    if (rows.length === 0) return res.status(401).json({ error: "Invalid credentials" });

    const user = rows[0];

    res.json({
      message: "Login successful",
      user: {
        user_id: user.user_id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  });
});


app.post("/api/register", (req, res) => {
  const { name, email, password } = req.body;

  const sql = "INSERT INTO users (name,email,password,role) VALUES (?,?,?,'CUSTOMER')";
  pool.query(sql, [name, email, password], (err, result) => {
    if (err) {
      if (err.code === "ER_DUP_ENTRY") {
        return res.status(400).json({ error: "Email already exists" });
      }
      return res.status(500).json({ error: err.message });
    }

    res.json({
      user: {
        user_id: result.insertId,
        name,
        email,
        role: "CUSTOMER"
      }
    });
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("🚀 Backend running on port " + PORT);
});
