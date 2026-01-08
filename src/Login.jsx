import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const payload = {
      name: e.target.name?.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    const url = isRegister
      ? "https://epicure-voyage.onrender.com/api/register"
      : "https://epicure-voyage.onrender.com/api/login";

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Authentication failed");
        return;
      }
      localStorage.setItem("user", JSON.stringify({
  user_id: data.user.user_id,
  name: data.user.name,
  email: data.user.email,
  role: data.user.role
}));


      if (data.user.role === "ADMIN") {
        navigate("/admin");
      } else {
        navigate("/tours");
      }
    } catch {
      setError("Server error. Try again later.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}></div>

      <div style={styles.card}>
        <h1 style={styles.title}>EPICURE VOYAGE</h1>
        <p style={styles.subtitle}>
          {isRegister ? "Create your account" : "Welcome back, explore Tamil Nadu"}
        </p>

        <form onSubmit={handleSubmit} style={styles.form}>
          {isRegister && (
            <input
              name="name"
              placeholder="Full Name"
              required
              style={styles.input}
            />
          )}

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            required
            style={styles.input}
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            style={styles.input}
          />

          {error && <p style={styles.error}>{error}</p>}

          <button type="submit" style={styles.button}>
            {isRegister ? "Create Account" : "Login"}
          </button>
        </form>

        <p style={styles.switchText}>
          {isRegister ? "Already have an account?" : "New to Epicure Voyage?"}{" "}
          <span
            style={styles.switchLink}
            onClick={() => {
              setIsRegister(!isRegister);
              setError("");
            }}
          >
            {isRegister ? "Login" : "Sign up"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;

const styles = {
  container: {
    minHeight: "100vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1582510003544-4d00b7f74220')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    fontFamily: "'Poppins', sans-serif",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,77,64,0.6))",
  },

  card: {
    position: "relative",
    zIndex: 2,
    width: "380px",
    maxWidth: "90%",
    padding: "2.5rem 2.2rem",
    borderRadius: "18px",
    background: "rgba(255,255,255,0.12)",
    backdropFilter: "blur(14px)",
    boxShadow: "0 25px 60px rgba(0,0,0,0.4)",
    color: "white",
    textAlign: "center",
  },

  title: {
    fontFamily: "'Cinzel', serif",
    letterSpacing: "2px",
    marginBottom: "0.3rem",
  },

  subtitle: {
    fontSize: "0.95rem",
    opacity: 0.9,
    marginBottom: "1.8rem",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "0.9rem",
  },

  input: {
    padding: "0.65rem 0.8rem",
    borderRadius: "10px",
    border: "none",
    outline: "none",
    fontSize: "0.9rem",
  },

  button: {
    marginTop: "0.5rem",
    padding: "0.6rem",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    background: "#ffd700",
    color: "#004d40",
    fontWeight: "700",
    fontSize: "0.95rem",
    transition: "0.3s",
  },

  switchText: {
    marginTop: "1.2rem",
    fontSize: "0.9rem",
  },

  switchLink: {
    color: "#ffd700",
    cursor: "pointer",
    fontWeight: "600",
  },

  error: {
    color: "#ffb4b4",
    fontSize: "0.85rem",
  },
};
