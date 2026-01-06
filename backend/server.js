import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// ✅ TEST ROUTE
app.get("/", (req, res) => {
  res.send("Tour Booking API is running");
});

// ✅ MYSQL CONNECTION
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Balaji@123",
  database: "epicure_voyage",
});

db.connect(err => {
  if (err) {
    console.error("❌ MySQL error:", err);
    return;
  }
  console.log("✅ MySQL connected");
});

// ✅ GET ALL BOOKINGS (ADMIN)
app.get("/api/bookings", (req, res) => {
  db.query("SELECT * FROM bookings ORDER BY booking_date DESC", (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

// ✅ CREATE BOOKING
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

  db.query(
    sql,
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

// ✅ ADMIN STATS
app.get("/api/admin/stats", (req, res) => {
  const sql = `
    SELECT 
      COUNT(*) AS total,
      SUM(booking_status='Confirmed') AS confirmed,
      SUM(booking_status='Pending') AS pending,
      SUM(booking_status='Cancelled') AS cancelled
    FROM bookings
  `;

  db.query(sql, (err, rows) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to fetch stats" });
    }
    res.json(rows[0]);
  });
});

// ✅ CUSTOMER BOOKINGS (MY TRIPS)
app.get("/api/my-bookings/:userId", (req, res) => {
  const userId = req.params.userId;

  const sql = `
    SELECT booking_id, tour_package, visit_date, payment_method,
           amount_paid, booking_status, booking_date
    FROM bookings
    WHERE customer_id = ?
    ORDER BY booking_date DESC
  `;

  db.query(sql, [userId], (err, rows) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to fetch bookings" });
    }
    res.json(rows);
  });
});

// ✅ UPDATE BOOKING STATUS (ADMIN)
app.put("/api/bookings/:id/status", (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const query = `
    UPDATE bookings
    SET booking_status = ?
    WHERE booking_id = ?
  `;

  db.query(query, [status, id], (err) => {
    if (err) return res.status(500).json({ error: err.message });

    res.json({ message: "Status updated successfully" });
  });
});

// ✅ LOGIN API (FIXED)
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT user_id, name, email, role FROM users WHERE email=? AND password=?";
  db.query(sql, [email, password], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });

    if (rows.length === 0) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const user = rows[0]; // ✅ FIX

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

// ✅ REGISTER CUSTOMER (FIXED)
app.post("/api/register", (req, res) => {
  const { name, email, password } = req.body;

  const sql = "INSERT INTO users (name,email,password,role) VALUES (?,?,?,'CUSTOMER')";
  db.query(sql, [name, email, password], (err, result) => {
    if (err) {
      if (err.code === "ER_DUP_ENTRY") {
        return res.status(400).json({ error: "Email already exists" });
      }
      return res.status(500).json({ error: err.message });
    }

    res.json({
      user: {
        user_id: result.insertId, // ✅ FIX
        name,
        email,
        role: "CUSTOMER"
      }
    });
  });
});

// ✅ SERVER START
app.listen(5000, () =>
  console.log("🚀 Backend running on http://localhost:5000")
);
