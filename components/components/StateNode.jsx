import React from 'react';


function StateNode(props) {
  const rectStyle = {
    transform: `translate(${props.xtranslate}px,${props.ytranslate}px)`,
    width: props.width,
    height: props.height,
    stroke: 'grey',
    strokeWidth: '0.9px',
    fill: '#FAFAFA',
    y: '10px',
    rx: '2px',
    ry: '2px',
  }

  const textStyle = {
    x: '4px',
    y: '10px',
    dy: '0.5em'
  }

  return (
    <rect style = {rectStyle}>
    </rect>
  )


}


export default StateNode;