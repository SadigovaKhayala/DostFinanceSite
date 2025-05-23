import React, { createContext, useState, useContext } from "react";

// Create the context for auth data
const AuthContext = createContext();

// Custom hook for using auth data
export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Login function
  const login = (username) => {
    setUser({ username });
    localStorage.setItem("user", JSON.stringify({ username }));
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  // Load user from localStorage if they are logged in
  React.useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
