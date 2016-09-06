import React from "react";
import { tree, hierarchy, select, path } from "d3";
const cloneDeep = require("lodash.clonedeep");

const treeInfo = {
  name: "1",
  children: [
    {
      name: "2",
      children: [
        {
          name: "3",
          children: [],
        },
        {
          name: "3",
          children: [],
        }
      ],
    },
    {
      name: "2",
      children: [
        {
          name: "3",
          children: [],
        }
      ],
    },
  ]
};


class D3React extends React.Component {
  constructor() {
    super();
    this.state = {
      width: 900,
      height: 700,
      nodeW: 121.35,
      nodeH: 75,
      nodes: [],
    };
  }

  componentWillMount() {
    const treeData = hierarchy(treeInfo);
    const nodes = tree().size([this.state.width, this.state.height])(treeData);
    let i = 0;
    const renderArr = [];
    nodes.each(d => {
      d.y = d.depth * this.state.height / 3;
      d.id = d.id || ++i;
      // using the information provided by d3
      // to render Node components
      // xtranslate={d.x - this.state.nodeW/2}
      renderArr.push(React.cloneElement(this.props.children, {
        xtranslate: d.x,
        ytranslate: d.y - 40,
        id: i,
        key: i,
        name: d.data.name,
        width: this.state.nodeW,
        height: this.state.nodeH,
      }))
    });

    this.setState({
      nodes: renderArr,
      d3nodes: nodes,
    });

  }

  componentDidMount() {
    if (this.props.links) {
      const links = this.state.d3nodes.links();
      select(document.getElementById("graphz"))
        .selectAll("path.link").data(links, d => d.target.id)
        .enter().insert("svg:path", "foreignObject")
        .attr("class", "link")
        .attr("d", (node) => {
          const oldX = node.source.x;
          const oldY = node.source.y;
          const newX = node.target.x;
          const newY = node.target.y;
          const pathing = path();
          pathing.moveTo(oldX + this.state.nodeW / 2, oldY);
          pathing.bezierCurveTo(oldX + this.state.nodeW / 2, (oldY + newY) / 2, newX + this.state.nodeW / 2, (oldY + newY) / 2, newX + this.state.nodeW / 2, newY);
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
      transform: `translate(-${this.state.nodeW / 2}px, 0px)`
    };
    return (
      <svg height={this.state.height} width={this.state.width} style={svgStyle} >
        <g style={gStyle} id="graphz">
        {this.state.nodes}
        </g>
      </svg>
    );
  }
}

export default D3React;

