import cytoscape from "cytoscape";
import popper from "cytoscape-popper";

cytoscape.use(popper);

function setup(cy) {
  console.log("cy.nodes()", cy.nodes());
  cy.nodes().map((node) => {
    node.on("dblclick", function (evt) {
      setTimeout(() => {
        cy.$(":selected").unselect();
      });

      let div = null;
      let input = null;

      function removeEventListeners() {
        p.destroy();
        node.off("position", handleNodePositionChange);
        cy.off("tap", handleCyTap);
        input.removeEventListener("keyup", handleInputKeyUp);
        div.remove();
      }

      function handleInputKeyUp(e) {
        console.log("keyup", e.target.value);
        if (e.key === "Enter") {
          removeEventListeners();
        } else {
          node.data("text", e.target.value?.trim() || "");
        }
      }

      const p = node.popper({
        content: () => {
          div = document.createElement("div");
          div.classList.add("cy-popper__content");

          input = document.createElement("textarea");
          input.setAttribute("type", "text");
          input.value = node.data()?.text;

          div.appendChild(input);

          document.body.appendChild(div);

          input.focus();

          input.addEventListener("keyup", handleInputKeyUp);

          // TODO: add event listeners for input

          return div;
        },
        popper: {}, // my popper options here
      });

      console.log("p", p);

      const handleNodePositionChange = () => {
        p.update();
      };

      const handleCyTap = (event) => {
        if (event.target !== node) {
          removeEventListeners();
        }
      };

      node.on("position", handleNodePositionChange);
      cy.on("tap", handleCyTap);
    });

    // cy.on("pan zoom resize", () => p.update());
  });
}

export default setup;
