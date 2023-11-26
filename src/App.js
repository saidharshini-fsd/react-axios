// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ListPage from "./components/ListPage";
import { UserContextProvider } from "./context/usercontext";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <UserContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ListPages" element={<ListPage />} />
          </Routes>
        </UserContextProvider>
      </div>
    </Router>
  );
}

export default App;

