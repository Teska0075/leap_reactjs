import React from "react";
import "./CardList.css";
import CardItem from "./Card";

const CardList = (props) => {
  return (
    <div className="container d-flex flex-wrap gap-4">
      {props.users.map((item) => (
        <CardItem user={item} />
      ))}
    </div>
  );
};

export default CardList;
