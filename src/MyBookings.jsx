import { useEffect, useState } from "react";

function MyBookings() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    fetch(`http://localhost:5000/api/my-bookings/${user.user_id}`)
      .then(res => res.json())
      .then(data => {
        setBookings(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [user]);

  if (!user) {
    return <h2 style={{ textAlign: "center" }}>Please login to view your trips</h2>;
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        🌍 My Trips
      </h2>

      {loading ? (
        <p style={{ textAlign: "center" }}>Loading your bookings...</p>
      ) : bookings.length === 0 ? (
        <p style={{ textAlign: "center" }}>You have no bookings yet.</p>
      ) : (
        <div style={{ overflowX: "auto" }}>
          <table border="1" cellPadding="10" cellSpacing="0" width="100%">
            <thead style={{ background: "#047857", color: "white" }}>
              <tr>
                <th>ID</th>
                <th>Tour</th>
                <th>Visit Date</th>
                <th>Payment</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Booked On</th>
              </tr>
            </thead>

            <tbody>
              {bookings.map(b => (
                <tr key={b.booking_id}>
                  <td>{b.booking_id}</td>
                  <td>{b.tour_package}</td>
                  <td>{new Date(b.visit_date).toLocaleDateString()}</td>
                  <td>{b.payment_method}</td>
                  <td>₹{b.amount_paid}</td>
                  <td style={{
                    fontWeight: "bold",
                    color:
                      b.booking_status === "Confirmed" ? "green" :
                      b.booking_status === "Cancelled" ? "crimson" : "orange"
                  }}>
                    {b.booking_status}
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

export default MyBookings;
