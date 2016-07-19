import React from "react";
import { tree, hierarchy, select, path } from "d3";
const cloneDeep = require("lodash.clonedeep");
import StateNode from "./StateNode.jsx";
import preloader from "spectacle/lib/utils/preloader";
import { Image } from 'spectacle';

const stateGraph = {
  name: "main.jsx",
  imageLink: 'https://freeiconshop.com/files/edd/js-outline.png',
  children: [
    {
      name: "monocle",
      imageLink: 'http://i.imgur.com/SLBbHoO.png',
      children: [],
    },
    {
      name: "bundle.js",
      imageLink: 'https://freeiconshop.com/files/edd/js-outline.png',
      children: [],
    },
  ]
};



export default class StateSync extends React.Component {
  constructor() {
    super();
    this.state = {
      width: 500,
      height: 400,
      nodeW: 80,
      nodeH: 85,
      nodes: [],
    };
  }

  componentWillMount() {
    const treeData = hierarchy(stateGraph);
    const nodes = tree().size([500, this.state.height])(treeData);
    let i = 0;
    const renderArr = [];
    nodes.each(d => {
      d.y = d.depth * this.state.height / 3;
      d.id = d.id || ++i;
      // using the information provided by d3
      // to render Node components
      // xtranslate={d.x - this.state.nodeW/2}
      renderArr.push(<StateNode
        xtranslate={d.x}
        ytranslate={d.y - 40}
        id={i}
        key={i}
        name={d.data.name}
        imageLink={d.data.imageLink}
        width={this.state.nodeW}
        height={this.state.nodeH}
        />);
    });

    this.setState({
      nodes: renderArr,
      d3nodes: nodes,
    });

  }

  componentDidMount() {
    const links = this.state.d3nodes.links();
    select(document.getElementById("graphz"))
      .selectAll("path.link").data(links, d => { return d.target.id; })
      .enter().insert("svg:path", "g")
      .attr("class", "statelink")
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

  render() {
    // const divStyle = {
    //   backgroundColor: "#FAFAFA",
    //   paddingTop: "20px",
    //   transform: "translate(0px, -20px)"
    // };
    const gStyle = {
      transform: `translate(-120px,40px)`
    };
    const svgStyle = {
      // transform: `translate(-${this.state.nodeW / 2}px, 0px)`
    };
    return (
      <svg height={this.state.height-86} width={this.state.width - 150} style={svgStyle} >
        <g style={gStyle} id="graphz">
        <path
          fill="none"
          stroke="#455A64"
          strokeWidth="10"
          d="M 200 170 l 200 0"
        />
        <path
          fill="none"
          stroke="#455A64"
          strokeWidth="10px"
          d="M415,180C415,220,290,220,290,260"
        />
        <path
          fill="none"
          stroke="#455A64"
          strokeWidth="10px"
          d="M290,265 l3,-6l-6,0Z"
        />
          {this.state.nodes}
          <StateNode
            xtranslate={250}
            ytranslate={135}
            width={80}
            height={40}
            />
        <image
        x="270"
        y="145"
        width="40"
        height="40"
        href="https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png"
        />
        </g>
      </svg>
    );
  }

}
