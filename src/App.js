import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import Header from "./components/Header";
import Home from "./components/Home";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
//Context
import UserProvider from "./context";

//Styles
import { GlobalStyle } from "./GlobalStyle";

const App = () => (
  <BrowserRouter>
    <UserProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:movieId" element={<Movie />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <GlobalStyle />
    </UserProvider>
  </BrowserRouter>
);

export default App;
