import React, { useContext } from "react";
import { Link } from "react-router-dom";

import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDbLogo from "../../images/tmdb_logo.svg";

import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";

import { Context } from "../../context";

const Header = () => {
  const [user] = useContext(Context);

  return (
    <Wrapper>
      <Content>
        <Link to="/movies">
          <LogoImg src={RMDBLogo} alt="rmdblogo" />
        </Link>
        {user ? (
          <span>Logged in as: {user.username}</span>
        ) : (
          <Link to="/login">
            <span>Log in</span>
          </Link>
        )}

        <TMDBLogoImg src={TMDbLogo} alt="tmdblogo" />
      </Content>
    </Wrapper>
  );
};

export default Header;
