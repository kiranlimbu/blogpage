import { useState, createContext, useEffect } from "react";

import { fetchApi } from "./api";

export const AuthContext = createContext(undefined);

export default function AuthProvider({ children }) {
  const [author, setAuthor] = useState(undefined);

  async function login(author) {
    setAuthor(author);
  }

  async function logout() {
    setAuthor(undefined);
  }

  return (
    <AuthContext.Provider value={{ author, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
