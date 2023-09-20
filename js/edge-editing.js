import cytoscape from "cytoscape";
import $ from "jquery";
import Konva from "konva";
import * as cytoscapeEdgeEditing from "cytoscape-edge-editing";

cytoscapeEdgeEditing(cytoscape, $, Konva);

function setup(cy) {
  console.log("edge-editing.js setup", cy);

  cy.edgeEditing({
    anchorShapeSizeFactor: 12,
    zIndex: 999,
    undoable: true,
    enableMultipleAnchorRemovalOption: true,
    initAnchorsAutomatically: false,
    useTrailingDividersAfterContextMenuOptions: false,
    enableCreateAnchorOnDrag: true,
    addBendMenuItemTitle: null,
    validateEdge: function (edge, newSource, newTarget) {
      setTimeout(() => cy.$(":selected").unselect());
      return newSource.id() !== newTarget.id() ? "valid" : null;
    },
  });

  cy.style().update();
}

export default setup;
