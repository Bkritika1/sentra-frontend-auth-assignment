import { useEffect, useState } from "react";
import { supabase } from "../services/supabaseClient";
import { useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [user, setUser] = useState(null);
 const navigate = useNavigate();
  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data?.user);
    });
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };
  return (
    <header className="header">
      <h1 className="logo">AdminPortal</h1>

      <div className="header-right">
        <div className="user-info">
          <p className="user-name">
            {user?.user_metadata?.full_name || "John Doe"}
          </p>
          <span>Super Admin</span>
        </div>

             <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  );
}
