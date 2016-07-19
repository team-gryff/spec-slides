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

  return (
    <g>
    <rect style = {rectStyle}>
    </rect>
    {props.name ? (
      <text
      x={props.xtranslate + 5}
      y={props.ytranslate + props.height / 4 + 5}
      fontSize="14px"
      >
      {props.name}
    </text>) : null
    }
    {
      props.imageLink ? (
      <image
        x={props.xtranslate + props.width / 4}
        y={props.ytranslate + props.height / 2.5}
        width="40"
        height="40"
        href={props.imageLink}
        />) : null
    }
    </g>
  )


}


export default StateNode;