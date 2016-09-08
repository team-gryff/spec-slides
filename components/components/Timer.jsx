import React from 'react';

var Timer = React.createClass({
  getInitialState: function() {
    return { secondsElapsed: 0 };
  },
  tick: function() {
    this.setState({ secondsElapsed: this.state.secondsElapsed + 1 });
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },

  componentWillUnmount: function() {
    clearInterval(this.interval);
  },

  render: function() {
    return (
      <div style={{ 
        color: "white", 
        position: 'absolute',
        top: 250,
        left: 675
      }}>Seconds Elapsed: {this.state.secondsElapsed}</div>
    );
  }
});

export default Timer;
