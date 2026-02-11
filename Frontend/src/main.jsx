import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { NotesProvider } from "./context/notes.context";
import { AuthProvider } from "./context/auth.context";
import './index.css';  


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <NotesProvider>
          <App />
        </NotesProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
