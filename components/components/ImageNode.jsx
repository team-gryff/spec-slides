import React, { PropTypes } from 'react';

const ImageNode = ({ xtranslate, ytranslate, name, width, height }) => {
  const style = {
    transform: `translate(${xtranslate}px,${ytranslate}px)`,
    width,
    height,
    cursor: 'pointer',
    backgroundColor: '#FAFAFA',
    borderRadius: '5px',
    textDecoration: 'none',
    textOverflow: 'ellipsis',
    };
  return (
    <foreignObject style={style}>
      <img src={name}/>
    </foreignObject>
  );
};

ImageNode.propTypes = {
  xtranslate: PropTypes.number,
  ytranslate: PropTypes.number,
  name: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default ImageNode;
