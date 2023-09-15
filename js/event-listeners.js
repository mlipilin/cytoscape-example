function addEventListeners(cy) {
  document.querySelectorAll('input[name="mode"]').forEach((radio) => {
    radio.addEventListener("change", (e) => {
      console.log("change", e.target.value);
      if (e.target.value === "move") {
        cy.userPanningEnabled(true);
      } else {
        cy.userPanningEnabled(false);
      }
    });
  });

  cy.on("tap", function (event) {
    // target holds a reference to the originator
    // of the event (core or element)
    console.log(event.position);
    var evtTarget = event.target;

    if (evtTarget === cy) {
      console.log("tap on background");
    } else {
      console.log("tap on some element", evtTarget.id());
    }
  });

  // cy.on('tapdrag', function (event) {
  //   // target holds a reference to the originator
  //   // of the event (core or element)
  //   // console.log(event.position);
  //   // var evtTarget = event.target;
  //   // if (evtTarget === cy) {
  //   //   console.log('tap on background');
  //   // } else {
  //   //   console.log('tap on some element', evtTarget.id());
  //   // }
  // });

  console.log("cy", cy.container());
  // cy.on("dblclick", "node", function (evt) {
  //   var node = evt.target;
  //   console.log("dblclick " + node.id(), {
  //     cyEdgehandles: window.cyEdgehandles,
  //   });
  //   // window.cyEdgehandles.enableDrawMode();
  //   // window.cyEdgehandles.start(node);
  // });

  window.addEventListener("keyup", (e) => {
    console.log("keyup", e.key);
    if (e.key === "Backspace" || e.key === "Delete") {
      cy.$(":selected").remove();
    }
  });
}

export default addEventListeners;
