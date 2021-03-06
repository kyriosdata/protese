import React from "react";

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2 className="subtitulo">{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: "Header name",
};

export default Header;
