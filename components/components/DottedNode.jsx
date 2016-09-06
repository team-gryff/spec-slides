import React, { PropTypes } from 'react';

const DottedNode = ({ xtranslate, ytranslate, name, width, height }) => {
  const style = {
    transform: `translate(${xtranslate}px,${ytranslate}px)`,
    width,
    height,
    cursor: 'pointer',
    backgroundColor: '#3498DB',
    border: '5px dashed black',
    borderRadius: '5px',
    textDecoration: 'none',
    textOverflow: 'ellipsis',
    };
  return (
    <foreignObject style={style}>
      
    </foreignObject>
  );
};

DottedNode.propTypes = {
  xtranslate: PropTypes.number,
  ytranslate: PropTypes.number,
  name: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default DottedNode;
