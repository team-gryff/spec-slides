import React from 'react';

const style = {
  transform: "translate(-160px, -70px)"
};

// stateless functional components using export const doesn't seem to work??
function IFrame(props) {
  return (
    <iframe
      style={style}
      height={props.height}
      name={props.name}
      sandbox={props.sanxbox}
      src={props.src}
      srcdoc={props.srcdoc}
      width={props.width} >
    </iframe>
  )
}

IFrame.propTypes = {
  height: React.PropTypes.string,
  name: React.PropTypes.string,
  sandbox: React.PropTypes.string,
  src: React.PropTypes.string,
  srcdoc: React.PropTypes.string,
  width: React.PropTypes.string,
};

export default IFrame;