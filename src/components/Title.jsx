import React from "react";

const Title = ({titleData}) => {
    
  return (
    <div className="section-title">
      <h2 className="">{titleData.title}</h2>
      <p>{titleData.subtitle}</p>
    </div>
  );
};

export default Title;
