import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./chartSetup";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import AuthPage from "./pages/Authpage";
import { AuthProvider } from "./context/AuthContext";

export default function App() {
  return (
     <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
