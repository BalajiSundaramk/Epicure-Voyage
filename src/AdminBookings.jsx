import { useEffect, useState } from "react";

function AdminBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState(null);

  const cardStyle = {
    background: "white",
    padding: "1.2rem",
    borderRadius: "12px",
    boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
    textAlign: "center",
    fontWeight: "600"
  };

  // ✅ Fetch bookings
  const fetchBookings = () => {
    fetch("http://localhost:5000/api/bookings")
      .then(res => res.json())
      .then(data => {
        setBookings(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  };

  // ✅ Fetch stats
  const fetchStats = () => {
    fetch("http://localhost:5000/api/admin/stats")
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchBookings();
    fetchStats();
  }, []);

  // ✅ Update booking status
  const updateStatus = async (id, newStatus) => {
    try {
      await fetch(`http://localhost:5000/api/bookings/${id}/status`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      setBookings(prev =>
        prev.map(b =>
          b.booking_id === id ? { ...b, booking_status: newStatus } : b
        )
      );

      fetchStats(); // 🔥 refresh dashboard cards
    } catch (err) {
      console.error("Status update failed", err);
      alert("Failed to update status");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>

      <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        📋 Admin Panel – Bookings
      </h2>

      {/* ✅ DASHBOARD CARDS */}
      {stats && (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "1rem",
          marginBottom: "2rem"
        }}>

          <div style={cardStyle}>
            <h3>Total Bookings</h3>
            <p>{stats.total}</p>
          </div>

          <div style={{ ...cardStyle, borderLeft: "5px solid green" }}>
            <h3>Confirmed</h3>
            <p>{stats.confirmed}</p>
          </div>

          <div style={{ ...cardStyle, borderLeft: "5px solid orange" }}>
            <h3>Pending</h3>
            <p>{stats.pending}</p>
          </div>

          <div style={{ ...cardStyle, borderLeft: "5px solid crimson" }}>
            <h3>Cancelled</h3>
            <p>{stats.cancelled}</p>
          </div>

        </div>
      )}

      {loading ? (
        <p style={{ textAlign: "center" }}>Loading bookings...</p>
      ) : bookings.length === 0 ? (
        <p style={{ textAlign: "center" }}>No bookings found.</p>
      ) : (
        <div style={{ overflowX: "auto" }}>
          <table border="1" cellPadding="10" cellSpacing="0" width="100%">

            <thead style={{ background: "#047857", color: "white" }}>
              <tr>
                <th>ID</th>
                <th>Customer ID</th>
                <th>Tour</th>
                <th>Visit Date</th>
                <th>Proof</th>
                <th>Payment</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Actions</th>
                <th>Booked On</th>
              </tr>
            </thead>

            <tbody>
              {bookings.map(b => (
                <tr key={b.booking_id}>
                  <td>{b.booking_id}</td>
                  <td>{b.customer_id}</td>
                  <td>{b.tour_package}</td>
                  <td>{new Date(b.visit_date).toLocaleDateString()}</td>
                  <td>{b.proof_type} - {b.proof_number}</td>
                  <td>{b.payment_method}</td>
                  <td>₹{b.amount_paid}</td>
                  <td>{b.booking_status}</td>

                  <td>
                    <button
                      onClick={() => updateStatus(b.booking_id, "Confirmed")}
                      style={{ marginRight: "6px", background: "green", color: "white" }}
                    >
                      Confirm
                    </button>

                    <button
                      onClick={() => updateStatus(b.booking_id, "Cancelled")}
                      style={{ background: "crimson", color: "white" }}
                    >
                      Cancel
                    </button>
                  </td>

                  <td>{new Date(b.booking_date).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      )}
    </div>
  );
}

export default AdminBookings;
      