import React from 'react';

const style = {
  padding: "15px 20px",
  color: "black",
  backgroundColor: "white",
  width: "280px",
  borderRadius: "3px",
  position: "absolute",
  top: 0,
  left: 700
};

var HelloMessage = React.createClass({
  render: function() {
    return <div style={style}>Hello {this.props.name}</div>;
  }
});

export default HelloMessage;
