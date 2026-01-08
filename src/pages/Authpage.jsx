

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../services/supabaseClient";
import "./Authpage.css";

export default function AuthPage() {
    const navigate = useNavigate();
    const [showLoginPassword, setShowLoginPassword] = useState(false);
    const [showSignupPassword, setShowSignupPassword] = useState(false);
    const [isLogin, setIsLogin] = useState(true);

    const [signupData, setSignupData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    useEffect(() => {
        const checkUser = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (session) {
                navigate("/dashboard");
            }
        };
        checkUser();

        const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
            if (session) navigate("/dashboard");
        });

        return () => listener.subscription.unsubscribe();
    }, [navigate]);

    const handleGoogleLogin = async () => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: "google",
        });

        if (error) {
            alert(error.message);
        }
    };

    const handleSignup = async () => {
        const { name, email, password } = signupData;
        if (!name || !email || !password) return alert("All fields are required");

        try {
            const { error } = await supabase.auth.signUp({
                email,
                password,
                options: {

                    data: { name: signupData.name }, 

                },
            });

            if (error) throw error;

            alert("Signup successful! Please login.");
            setIsLogin(true);
        } catch (err) {
            alert(err.message);
        }
    };

    const handleLogin = async () => {
        const { email, password } = loginData;
        if (!email || !password) return alert("All fields are required");

        try {
            const { error } = await supabase.auth.signInWithPassword({ email, password });
            if (error) throw error;

        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <div className="auth-page">
            <div className={`auth-card ${isLogin ? "" : "sign-up-mode"}`}>
                <div className="auth-left">
                    <h2>{isLogin ? "Welcome Back!" : "Hello, Friend!"}</h2>
                    <p>
                        {isLogin
                            ? "Login with your personal details to access the dashboard"
                            : "Enter your details and start your journey with us"}
                    </p>
                    <button className="toggle-btn" onClick={() => setIsLogin(!isLogin)}>
                        {isLogin ? "Sign Up" : "Sign In"}
                    </button>
                </div>

                <div className="auth-right">
                    <h2>{isLogin ? "Login" : "Sign Up"}</h2>

                    {isLogin ? (
                        <>
                            <input
                                placeholder="Email"
                                value={loginData.email}
                                onChange={(e) =>
                                    setLoginData({ ...loginData, email: e.target.value })
                                }
                            />
                            <div className="password-field">
                                <input
                                    placeholder="Password"
                                    type={showLoginPassword ? "text" : "password"}
                                    value={loginData.password}
                                    onChange={(e) =>
                                        setLoginData({ ...loginData, password: e.target.value })
                                    }
                                />
                                <span
                                    className="eye-icon"
                                    onClick={() => setShowLoginPassword(!showLoginPassword)}
                                >
                                    {showLoginPassword ? "🙈" : "👁"}
                                </span>
                            </div>

                            <button className="submit-btn" onClick={handleLogin}>
                                Login
                            </button>
                            <button className="google-btn" onClick={handleGoogleLogin}>
                                Continue with Google
                            </button>
                        </>
                    ) : (
                        <>
                            <input
                                placeholder="Name"
                                value={signupData.name}
                                onChange={(e) =>
                                    setSignupData({ ...signupData, name: e.target.value })
                                }
                            />
                            <input
                                placeholder="Email"
                                value={signupData.email}
                                onChange={(e) =>
                                    setSignupData({ ...signupData, email: e.target.value })
                                }
                            />
                            <div className="password-field">
                                <input
                                    placeholder="Password"
                                    type={showSignupPassword ? "text" : "password"}
                                    value={signupData.password}
                                    onChange={(e) =>
                                        setSignupData({ ...signupData, password: e.target.value })
                                    }
                                />
                                <span
                                    className="eye-icon"
                                    onClick={() => setShowSignupPassword(!showSignupPassword)}
                                >
                                    {showSignupPassword ? "🙈" : "👁"}
                                </span>
                            </div>

                            <button className="submit-btn" onClick={handleSignup}>
                                Create Account
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

