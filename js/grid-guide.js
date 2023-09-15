import cytoscape from "cytoscape";
import gridGuide from "cytoscape-grid-guide";

gridGuide(cytoscape);

function setup(cy) {
  cy.gridGuide({
    // Guidelines
    // snapToGridOnRelease: false,
    drawGrid: true,
    gridStackOrder: -1, // Namely z-index
    gridColor: "#DFDFDF", // Color of grid lines
    lineWidth: 1.0, // Width of grid lines
    guidelinesStackOrder: 4, // z-index of guidelines
    // guidelinesTolerance: 2.0, // Tolerance distance for rendered positions of nodes' interaction.
    // resize: true,
    gridSpacing: 60,
  });
}

export default setup;
