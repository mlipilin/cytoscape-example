import cytoscape from "cytoscape";

import elements from "./js/elements";

import addEventListeners from "./js/event-listeners";

import setupCompoundDragAndDrop from "./js/compound-drag-and-drop";
import setupContextMenus from "./js/context-menus";
import setupUndoRedo from "./js/undo-redo";
import setupEdgeEditing from "./js/edge-editing";
import setupEdgehandles from "./js/edgehandles";
import setupGridGuide from "./js/grid-guide";

import "./js/dblclick";

import style from "./js/style";

import "./styles/index.scss";

const cy = cytoscape({
  container: document.getElementById("cy"),
  style,
  zoom: 0.5,
});
cy.add(elements);

window.__cy__ = cy;

setupContextMenus(cy);
setupUndoRedo(cy);
setupEdgeEditing(cy);
setupEdgehandles(cy);
setupGridGuide(cy);
setupCompoundDragAndDrop(cy);

addEventListeners(cy);
