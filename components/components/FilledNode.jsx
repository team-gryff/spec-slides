import React, { PropTypes } from 'react';

const FilledNode = ({ xtranslate, ytranslate, name, width, height }) => {
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
    const divStyle = {
      backgroundColor: '#039BE5',
      // transform: `translate(${xtranslate}px,${ytranslate}px)`,
      width: '100%',
      height: `${height / 3}`,
    }
  return (
    <foreignObject style={style}>
      <div style={divStyle} />
    </foreignObject>
  );
};

FilledNode.propTypes = {
  xtranslate: PropTypes.number,
  ytranslate: PropTypes.number,
  name: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default FilledNode;
