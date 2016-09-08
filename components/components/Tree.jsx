import React from "react";
import { tree, hierarchy, select, path } from "d3";

class Tree extends React.Component {
  constructor() {
    super();
    this.state = { nodes: [] };
  }

  componentWillMount() {
    const treeData = hierarchy(this.props.treeInfo);
    const nodes = tree().size([this.props.width, this.props.height])(treeData);
    let i = 0;
    const renderArr = [];
    nodes.each(d => {
      d.y = this.props.reverse ? this.props.nodeW - d.depth * this.props.height / 3 + 270
       : d.depth * this.props.height / 3;
      d.id = d.id || ++i;
      // using the information provided by d3
      // to render Node components
      // xtranslate={d.x - this.props.nodeW/2}
      renderArr.push(React.cloneElement(this.props.children, {
        xtranslate: d.x,
        ytranslate: d.y - 40,
        id: i,
        key: i,
        name: d.data.name,
        width: this.props.nodeW,
        height: this.props.nodeH
      }))
    });

    this.setState({
      nodes: renderArr,
      d3nodes: nodes
    });

  }

  componentDidMount() {
    if (this.props.links) {
      const linkClass = this.props.reverse ? 'reverse-link' : 'link';
      const links = this.state.d3nodes.links();
      select(document.getElementById("graphz"))
        .selectAll("path.link").data(links, d => d.target.id)
        .enter().insert("svg:path", "foreignObject")
        .attr("class", linkClass)
        .attr("d", (node) => {
          const oldX = node.source.x;
          const oldY = node.source.y;
          const newX = node.target.x;
          const newY = node.target.y;
          const pathing = path();
          pathing.moveTo(oldX + this.props.nodeW / 2, oldY);
          // pathing.bezierCurveTo(newX + this.props.nodeW / 2, (oldY + newY) / 2, oldX + this.props.nodeW / 2, (oldY + newY) / 2, newX + this.props.nodeW / 2, newY);
          pathing.bezierCurveTo(oldX + this.props.nodeW / 2, (oldY + newY) / 2, newX + this.props.nodeW / 2, (oldY + newY) / 2, newX + this.props.nodeW / 2, newY);
          return pathing;
        });
    }
  }

  render() {
    // const divStyle = {
    //   backgroundColor: "#FAFAFA",
    //   paddingTop: "20px",
    //   transform: "translate(0px, -20px)"
    // };
    const gStyle = {
      transform: `translate(0px,40px)`
    };
    const svgStyle = {
      paddingTop: '30px',
      transform: `translate(-${this.props.nodeW / 2}px, 0px)`
    };
    return (
      <svg height={this.props.height} width={this.props.width} style={svgStyle} >
        <g style={gStyle} id="graphz">
        {this.state.nodes}
        </g>
      </svg>
    );
  }
}

Tree.propTypes = {
  treeInfo: React.PropTypes.object,
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  nodeW: React.PropTypes.number,
  nodeH: React.PropTypes.number,
  reverse: React.PropTypes.bool
};

Tree.defaultProps = {
  width: 900,
  height: 700,
  nodeW: 121.35,
  nodeH: 75,
  reverse: false,
  links: false
};

export default Tree;

