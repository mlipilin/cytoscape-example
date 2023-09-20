import icons from "./icons";

const ICONS = [
  icons.database,
  icons.globe,
  icons.comment,
  icons.flow,
  icons.calendar,
];

const nodes = [
  {
    data: {
      id: "n1",
      text: "Вход",
      type: "component",
    },
    position: { x: 1000, y: 100 },
    style: { ...ICONS[0] },
  },
  {
    data: {
      id: "n2",
      text: "Регионы",
      type: "component",
    },
    position: { x: 800, y: 300 },
    style: { ...ICONS[1] },
  },
  {
    data: {
      id: "n3",
      text: "Оф. сайт",
      type: "component",
    },
    position: { x: 600, y: 700 },
    style: { ...ICONS[0] },
  },
  {
    data: {
      id: "n4",
      text: "Поставщик 1",
      type: "component",
    },
    position: { x: 1000, y: 700 },
    style: { ...ICONS[1] },
  },
  {
    data: {
      id: "n5",
      text: "Инхаус ФССП",
      type: "component",
    },
    position: { x: 1200, y: 700 },
    style: { ...ICONS[0] },
  },
  {
    data: {
      id: "n6",
      text: "Результат с офф. сайта",
      type: "component",
    },
    position: { x: 200, y: 900 },
    style: { ...ICONS[1] },
  },
  {
    data: {
      id: "n7",
      text: "Успешно?",
      type: "questionComponent",
    },
    position: { x: 600, y: 1100 },
    style: { ...ICONS[0] },
  },
  {
    data: {
      id: "n8",
      text: "Результат от поставщика?",
      type: "component",
    },
    position: { x: 1000, y: 1100 },
    style: { ...ICONS[1] },
  },
  {
    data: {
      id: "n9",
      text: "Успешно?",
      type: "questionComponent",
    },
    position: { x: 1200, y: 1100 },
    style: { ...ICONS[0] },
  },
  {
    data: {
      id: "n10",
      text: "Итоговый результат",
      type: "component",
    },
    position: { x: 1400, y: 700 },
    style: { ...ICONS[1] },
  },
];
const edges = [
  { data: { id: "e1", source: "n1", target: "n2", arrow: "triangle" } },
  { data: { id: "e2", source: "n1", target: "n3", arrow: "triangle" } },
  { data: { id: "e3", source: "n1", target: "n4", arrow: "triangle" } },
  { data: { id: "e4", source: "n1", target: "n5", arrow: "triangle" } },
  { data: { id: "e5", source: "n2", target: "n3", arrow: "triangle" } },
  { data: { id: "e6", source: "n2", target: "n4", arrow: "triangle" } },
  { data: { id: "e7", source: "n3", target: "n6", arrow: "triangle" } },
  { data: { id: "e8", source: "n3", target: "n7", arrow: "triangle" } },
  {
    data: {
      id: "e9",
      source: "n7",
      target: "n6",
      arrow: "triangle",
      text: "true",
      cyedgebendeditingWeights: [1],
      cyedgebendeditingDistances: [175],
    },
    style: { "line-style": "dashed" },
  },
  { data: { id: "e10", source: "n4", target: "n8", arrow: "triangle" } },
  { data: { id: "e11", source: "n4", target: "n9", arrow: "triangle" } },
  {
    data: { id: "e12", source: "n9", target: "n8", arrow: "triangle" },
    style: { "line-style": "dashed" },
  },
  {
    data: { id: "e13", source: "n9", target: "n5", arrow: "triangle" },
    style: { "line-style": "dashed" },
  },
  { data: { id: "e14", source: "n5", target: "n10", arrow: "triangle" } },
];

export default [...nodes, ...edges];
