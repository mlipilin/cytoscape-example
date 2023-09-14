import cytoscape from "cytoscape";
import undoRedo from "cytoscape-undo-redo";

console.log("undoRedo", undoRedo);
undoRedo(cytoscape);

function setup(cy) {
  cy.undoRedo({
    isDebug: false, // Debug mode for console messages
    actions: {}, // actions to be added
    undoableDrag: true, // Whether dragging nodes are undoable can be a function as well
    stackSizeLimit: undefined, // Size limit of undo stack, note that the size of redo stack cannot exceed size of undo stack
    ready: function () {
      // callback when undo-redo is ready
    },
  });
}

export default setup;
