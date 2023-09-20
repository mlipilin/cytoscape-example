const colorBackground = "#f4f4f5";
const colorEdge = "#969696";
const colorText = "#535665";
const colorBorder = "#cccccc";
const colorBorderHighlight = "#3E9AFF";

const style = [
  {
    selector: "node",
    style: {
      "background-color": "#ffffff",
      "border-width": 2,
      "border-color": colorBorder,
      shape: "round-rectangle",
      height: 60,
      width: 60,
      label: "data(text)",
      "overlay-color": colorBorderHighlight,
      "overlay-padding": 5,
      color: colorText,
      "font-size": "17px",
      "font-weight": 500,
      "text-margin-y": 95,
      "text-background-opacity": 0.8,
      "text-background-color": colorBackground,
      "text-background-padding": 3,
      "background-height": 32,
      "background-width": 32,
    },
  },
  {
    selector: "edge",
    style: {
      color: "#ffffff",
      label: "data(text)",
      "font-size": "14px",
      "line-color": colorEdge,
      "text-background-opacity": 1,
      "text-background-shape": "round-rectangle",
      "text-background-color": colorEdge,
      "text-background-padding": 3,
      "text-rotation": "autorotate",
      width: 2,
      "curve-style": "bezier",
      // 'curve-style': 'unbundled-bezier',
      // 'curve-style': 'taxi',
    },
  },
  {
    selector: "edge.unbundled-bezier",
    style: {
      "control-point-distances": [60, -60],
      "control-point-weights": [0.25, 0.75],
    },
  },
  {
    selector: "edge[arrow]",
    style: {
      "arrow-scale": 1.4,
      "source-arrow-color": colorEdge,
      "source-arrow-shape": "circle",
      "source-arrow-shape": "none",
      "target-arrow-color": colorEdge,
      "target-arrow-shape": "circle-triangle",
      "target-arrow-shape": "triangle",
    },
  },
  {
    selector: ".eh-ghost-edge.eh-preview-active",
    style: {
      opacity: 0,
    },
  },
  {
    selector: ":active",
    style: {
      "border-color": colorBorderHighlight,
      "overlay-color": colorBorderHighlight,
      "overlay-opacity": 0.2,
    },
  },
  {
    selector: ":selected",
    style: {
      "border-color": colorBorderHighlight,
      "overlay-color": colorBorderHighlight,
      "overlay-opacity": 0.2,
    },
  },
  // {
  //   selector: 'edge.hollow',
  //   style: {
  //     'source-arrow-fill': 'hollow',
  //     'target-arrow-fill': 'hollow',
  //   },
  // },
  // {
  //   selector: 'edge.taxi',
  //   style: {
  //     // 'curve-style': 'taxi',
  //     'taxi-direction': 'auto',
  //     'taxi-turn': '50%',
  //     'taxi-turn-min-distance': 5,
  //   },
  // },
];

export default style;
