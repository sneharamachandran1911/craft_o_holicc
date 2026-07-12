import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Login.css";

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.email || !formData.password) {
            setError("Please fill in both fields.");
            return;
        }
        setError("");
        console.log("Logging in with:", formData);
    };

    return (
        <div className="login-page">
            <div className="login-card">
                <p className="login-tagline">welcome back</p>
                <h1 className="login-heading">Log in to Craft-o-holic</h1>
                <p className="login-desc">
                    Pick up right where you left off — your cart, your custom
                    orders, your favourites.
                </p>

                <form className="login-form" onSubmit={handleSubmit}>
                    {error && <p className="login-error">{error}</p>}

                    <label className="login-label">
                        Email
                        <input
                            type="email"
                            name="email"
                            className="login-input"
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </label>

                    <label className="login-label">
                        Password
                        <input
                            type="password"
                            name="password"
                            className="login-input"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </label>

                    <Link to="/forgot-password" className="login-forgot">
                        Forgot password?
                    </Link>

                    <button type="submit" className="login-submit">
                        Log in
                    </button>
                </form>

                <p className="login-switch">
                    New here? <Link to="/signup">Create an account</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;