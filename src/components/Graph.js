import React from "react";

const Graph = (props) => {
  const { percent } = props;
  const stylesGraph = {
    width: (percent / 100) * 200 + "px",
  };

  return (
    <div className="grafic">
      <div className="percent" style={stylesGraph}>
        {percent}%
      </div>
    </div>
  );
};

export default Graph;
