import { createContext, useState } from "react";

// Create the AuthContext
export const AuthContext = createContext();

// AuthContext Provider Component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Mock login function
  const login = () => {
    setIsAuthenticated(true);
  };

  // Mock logout function
  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};