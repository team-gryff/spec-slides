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
      backgroundColor: '#1565C0',
      borderTopRightRadius: '5px',
      borderTopLeftRadius: '5px',
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
