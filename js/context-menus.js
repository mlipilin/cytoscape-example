import cytoscape from "cytoscape";
import contextMenus from "cytoscape-context-menus";

// register extension
cytoscape.use(contextMenus);

// import CSS as well
// import 'cytoscape-context-menus/cytoscape-context-menus.css';

const CURVE_STYLES = ["bezier", "unbundled-bezier", "taxi"];
const LINE_STYLES = ["solid", "dotted", "dashed"];

function setup(cy) {
  console.log(cy);
  const instance = cy.contextMenus({
    evtType: "cxttap",
    menuItems: [
      {
        id: "〰️ curve-style", // ID of menu item
        content: "〰️ curve-style", // Display content of menu item
        tooltipText: "〰️ curve-style", // Tooltip text for menu item
        // image: { src: 'remove.svg', width: 12, height: 12, x: 6, y: 4 }, // menu icon
        // Filters the elements to have this menu item on cxttap
        // If the selector is not truthy no elements will have this menu item on cxttap
        selector: "edge",
        disabled: false, // Whether the item will be created as disabled
        show: true, // Whether the item will be shown or not
        hasTrailingDivider: true, // Whether the item will have a trailing divider
        coreAsWell: false, // Whether core instance have this item on cxttap
        submenu: CURVE_STYLES.map((curveStyle) => ({
          id: curveStyle,
          content: curveStyle,
          tooltipText: curveStyle,
          onClickFunction: function (event) {
            event.target.element().style({ "curve-style": curveStyle });
            if (curveStyle === "unbundled-bezier") {
              event.target.element().addClass("unbundled-bezier");
            } else {
              event.target.element().removeClass("unbundled-bezier");
            }
            cy.$(":selected").unselect();
          },
          show: true,
          hasTrailingDivider: true,
        })),
      },
      {
        id: "🟰 line-style", // ID of menu item
        content: "🟰 line-style", // Display content of menu item
        tooltipText: "🟰 line-style", // Tooltip text for menu item
        // image: { src: 'remove.svg', width: 12, height: 12, x: 6, y: 4 }, // menu icon
        // Filters the elements to have this menu item on cxttap
        // If the selector is not truthy no elements will have this menu item on cxttap
        selector: "edge",
        disabled: false, // Whether the item will be created as disabled
        show: true, // Whether the item will be shown or not
        hasTrailingDivider: true, // Whether the item will have a trailing divider
        coreAsWell: false, // Whether core instance have this item on cxttap
        submenu: LINE_STYLES.map((lineStyle) => ({
          id: lineStyle,
          content: lineStyle,
          tooltipText: lineStyle,
          onClickFunction: function (event) {
            event.target.element().style({ "line-style": lineStyle });
            cy.$(":selected").unselect();
          },
          show: true,
          hasTrailingDivider: true,
        })),
      },
      {
        id: "➕ edge",
        content: "➕ edge",
        tooltipText: "➕ edge",
        selector: "node",
        onClickFunction: function (event) {
          const node = event.target.element();
          window.cyEdgehandles.enableDrawMode();
          window.cyEdgehandles.start(node);
        },
        show: true,
        hasTrailingDivider: true,
      },
      {
        id: "🚫 remove",
        content: "🚫 remove",
        tooltipText: "🚫 remove",
        selector: "node, edge",
        onClickFunction: function (event) {
          event.target.element().remove();
        },
        show: true,
        hasTrailingDivider: true,
      },
    ],
    submenuIndicator: {
      src: "http://localhost:5173/chevron-right.svg",
      width: 12,
      height: 12,
    },
  });

  instance.insertBeforeMenuItem = () => {};
  instance.moveBeforeOtherMenuItem = () => {};
  instance.appendMenuItem = () => {};
  instance.appendMenuItems = () => {};

  return instance;
}

export default setup;
