import cytoscape from 'cytoscape';
import edgehandles from 'cytoscape-edgehandles';

cytoscape.use(edgehandles);

function setup(cy) {
  console.log('setup edgehandles', cy);
  window.cyEdgehandles = cy.edgehandles({
    canConnect: function (sourceNode, targetNode) {
      // whether an edge can be created between source and target
      return !sourceNode.same(targetNode); // e.g. disallow loops
    },
    edgeParams: function (sourceNode, targetNode) {
      // for edges between the specified source and target
      // return element object to be passed to cy.add() for edge
      console.log('sourceNode', sourceNode.data().type);
      return {
        data: {
          arrow: 'triangle',
          text: `Edge`,
        },
        style:
          sourceNode.data().type === 'questionComponent'
            ? { 'line-style': 'dashed' }
            : {},
      };
    },
    hoverDelay: 150, // time spent hovering over a target node before it is considered selected
    snap: true, // when enabled, the edge can be drawn by just moving close to a target node (can be confusing on compound graphs)
    snapThreshold: 50, // the target node must be less than or equal to this many pixels away from the cursor/finger
    snapFrequency: 15, // the number of times per second (Hz) that snap checks done (lower is less expensive)
    noEdgeEventsInDraw: true, // set events:no to edges during draws, prevents mouseouts on compounds
    disableBrowserGestures: true, // during an edge drawing gesture, disable browser gestures such as two-finger trackpad swipe and pinch-to-zoom
  });

  cy.on('ehcomplete', (event, sourceNode, targetNode, addedEdge) => {
    console.log('on ehcomplete', { event, sourceNode, targetNode, addedEdge });
    cyEdgehandles.disableDrawMode();
  });
  cy.on('ehstop', (event, sourceNode) => {
    console.log('on ehstop', { event, sourceNode });
    cyEdgehandles.disableDrawMode();
  });
  cy.on('ehcancel', (event, sourceNode, cancelledTargets) => {
    console.log('on ehcancel', { event, sourceNode, cancelledTargets });
    cyEdgehandles.disableDrawMode();
  });
}

export default setup;
