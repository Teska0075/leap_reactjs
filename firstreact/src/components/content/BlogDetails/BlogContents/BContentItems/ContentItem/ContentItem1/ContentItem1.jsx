import React from "react";

const ContentItem1 = (props) => {
  return (
    <>
      <h1 className={props.titleClass}>{props.title}</h1>
      <p className={props.paraClass}>{props.para}</p>
    </>
  );
};

export default ContentItem1;
