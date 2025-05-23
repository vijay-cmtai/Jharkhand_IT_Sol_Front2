import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Modified User interface for the session: we might store an ID or just a logged-in status
// For this example, let's assume we just want to know *if* they are logged in and if they are admin,
// without storing their specific email in the session `user` object.
interface SessionUser {
  // email: string; // We will remove this
  id?: string; // Optional: could be a generated ID or username if you have one
  isLoggedIn: boolean; // Explicitly track logged-in status
  isAdmin: boolean;
}

interface AuthContextType {
  user: SessionUser | null; // User type changed to SessionUser
  login: (email: string, password: string) => boolean;
  signup: (email: string, password: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<SessionUser | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user_session"); // Changed key to avoid confusion
    if (storedUser) {
      try {
        const parsedUser: SessionUser = JSON.parse(storedUser);
        // Basic validation for the parsed user structure
        if (typeof parsedUser.isLoggedIn === 'boolean' && typeof parsedUser.isAdmin === 'boolean') {
          setUser(parsedUser);
        } else {
          console.error("Stored user session data is malformed.");
          localStorage.removeItem("user_session");
        }
      } catch (error) {
        console.error("Failed to parse stored user session data:", error);
        localStorage.removeItem("user_session");
      }
    }
  }, []);

  const login = (email: string, password: string): boolean => {
    const usersFromStorage = JSON.parse(localStorage.getItem("users") || "[]");
    const foundUserCredentials = usersFromStorage.find(
      (u: { email: string; password: string }) =>
        u.email === email && u.password === password
    );

    if (email === "admin@gmail.com" && password === "admin123") {
      const adminSessionData: SessionUser = { isLoggedIn: true, isAdmin: true /* id: "admin" */ }; // No email
      localStorage.setItem("user_session", JSON.stringify(adminSessionData));
      setUser(adminSessionData);
      return true;
    }

    if (foundUserCredentials) {
      // We found the user by email and password, but we won't store the email in the session
      const userSessionData: SessionUser = { isLoggedIn: true, isAdmin: false /* id: foundUserCredentials.email (or a real ID) */ }; // No email
      localStorage.setItem("user_session", JSON.stringify(userSessionData));
      setUser(userSessionData);
      return true;
    }

    return false;
  };

  const signup = (email: string, password: string): boolean => {
    const usersFromStorage = JSON.parse(localStorage.getItem("users") || "[]");
    if (usersFromStorage.some((u: { email: string }) => u.email === email)) {
      // Email already exists
      return false;
    }

    // Add new user credentials to the "users" list (this still stores email for lookup)
    usersFromStorage.push({ email, password }); // Store actual credentials for login lookup
    localStorage.setItem("users", JSON.stringify(usersFromStorage));

    // Log in the new user for the session, without storing their email in the session object
    const newUserSessionData: SessionUser = { isLoggedIn: true, isAdmin: false /* id: email (or a real ID) */ }; // No email
    localStorage.setItem("user_session", JSON.stringify(newUserSessionData));
    setUser(newUserSessionData);
    return true;
  };

  const logout = () => {
    localStorage.removeItem("user_session");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
        isAuthenticated: !!user && user.isLoggedIn, // Check isLoggedIn flag
        isAdmin: user?.isAdmin || false,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};