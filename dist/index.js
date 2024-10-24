"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.ts
var ui_exports = {};
__export(ui_exports, {
  Button: () => Button,
  Counter: () => Counter,
  CustomCard: () => CustomCard,
  CustomModal: () => CustomModal,
  CustomSwitch: () => CustomSwitch,
  Header: () => Header,
  Input: () => Input,
  Select: () => Select,
  TextArea: () => TextArea,
  setupCounter: () => setupCounter
});
module.exports = __toCommonJS(ui_exports);

// utils/counter.ts
function setupCounter(element) {
  let counter = 0;
  const setCounter = (count) => {
    counter = count;
    element.innerText = `count is ${counter}`;
  };
  element.addEventListener("click", () => setCounter(++counter));
  setCounter(0);
}

// components/header.ts
function Header({ title }) {
  return `
    <header id="header">
      <h1>${title}</h1>
    </header>
    `;
}

// components/counter.ts
function Counter() {
  return `<button id="counter" type="button"></button>`;
}

// components/button.tsx
var import_react = __toESM(require("react"));
var Button = () => {
  return /* @__PURE__ */ import_react.default.createElement("button", null);
};

// components/input.tsx
var import_react2 = __toESM(require("react"));
var import_react3 = require("@chakra-ui/react");
var Input = ({ label, name, ...props }) => {
  return /* @__PURE__ */ import_react2.default.createElement(import_react3.FormControl, { id: name }, label && /* @__PURE__ */ import_react2.default.createElement(import_react3.FormLabel, null, label), /* @__PURE__ */ import_react2.default.createElement(import_react3.Input, { name, ...props }));
};

// components/select.tsx
var import_react4 = __toESM(require("react"));
var import_react5 = require("@chakra-ui/react");
var Select = ({
  label = "",
  name = "",
  option = [],
  size = "md",
  ...rest
}) => {
  return /* @__PURE__ */ import_react4.default.createElement(import_react5.FormControl, { id: name }, label && /* @__PURE__ */ import_react4.default.createElement(import_react5.FormLabel, null, label), /* @__PURE__ */ import_react4.default.createElement(import_react5.Select, { placeholder: `Select ${label}`, size, ...rest }, option.map((opt) => /* @__PURE__ */ import_react4.default.createElement("option", { key: opt.value, value: opt.value }, opt.label))));
};

// components/textArea.tsx
var import_react6 = require("@chakra-ui/react");
var import_react7 = __toESM(require("react"));
var TextArea = ({ label, name, ...props }) => {
  return /* @__PURE__ */ import_react7.default.createElement(import_react7.default.Fragment, null, /* @__PURE__ */ import_react7.default.createElement(import_react6.FormControl, { id: name }, label && /* @__PURE__ */ import_react7.default.createElement(import_react6.FormLabel, null, label), /* @__PURE__ */ import_react7.default.createElement(import_react6.Textarea, { name, placeholder: "Here is a sample placeholder", ...props })));
};

// components/customSwitch.tsx
var import_react8 = __toESM(require("react"));
var import_react9 = require("@chakra-ui/react");
var CustomSwitch = ({
  label = "Enable email alerts?",
  ...rest
}) => {
  return /* @__PURE__ */ import_react8.default.createElement(import_react9.FormControl, { display: "flex", alignItems: "center" }, /* @__PURE__ */ import_react8.default.createElement(import_react9.FormLabel, { htmlFor: "email-alerts", mb: "0" }, label), /* @__PURE__ */ import_react8.default.createElement(import_react9.Switch, { id: "email-alerts", ...rest }));
};

// components/customCard.tsx
var import_react10 = require("@chakra-ui/react");
var import_react11 = __toESM(require("react"));
var CustomCard = ({
  isHeader = false,
  isFooter = false,
  headerContent = /* @__PURE__ */ import_react11.default.createElement(import_react11.default.Fragment, null),
  footerContent = /* @__PURE__ */ import_react11.default.createElement(import_react11.default.Fragment, null),
  cardMainContent = /* @__PURE__ */ import_react11.default.createElement(import_react11.default.Fragment, null),
  ...rest
}) => {
  return /* @__PURE__ */ import_react11.default.createElement(import_react10.Card, { maxW: "md", ...rest }, isHeader && /* @__PURE__ */ import_react11.default.createElement(import_react10.CardHeader, null, headerContent), /* @__PURE__ */ import_react11.default.createElement(import_react10.CardBody, null, cardMainContent), /* @__PURE__ */ import_react11.default.createElement(
    import_react10.Image,
    {
      objectFit: "cover",
      src: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      alt: "Chakra UI"
    }
  ), isFooter && /* @__PURE__ */ import_react11.default.createElement(
    import_react10.CardFooter,
    {
      justify: "space-between",
      flexWrap: "wrap",
      sx: {
        "& > button": {
          minW: "136px"
        }
      }
    },
    /* @__PURE__ */ import_react11.default.createElement(import_react10.Button, { flex: "1", variant: "ghost", leftIcon: /* @__PURE__ */ import_react11.default.createElement(import_react11.default.Fragment, null) }, "Like"),
    /* @__PURE__ */ import_react11.default.createElement(import_react10.Button, { flex: "1", variant: "ghost", leftIcon: /* @__PURE__ */ import_react11.default.createElement(import_react11.default.Fragment, null) }, "Comment"),
    /* @__PURE__ */ import_react11.default.createElement(import_react10.Button, { flex: "1", variant: "ghost", leftIcon: /* @__PURE__ */ import_react11.default.createElement(import_react11.default.Fragment, null) }, "Share"),
    footerContent
  ));
};

// components/customModal.tsx
var import_react12 = require("@chakra-ui/react");
var import_react13 = __toESM(require("react"));
var CustomModal = ({ isOpen = false, onClose, children = /* @__PURE__ */ import_react13.default.createElement(import_react13.default.Fragment, null) }) => {
  return /* @__PURE__ */ import_react13.default.createElement(import_react12.Modal, { isCentered: true, isOpen, onClose }, isOpen && /* @__PURE__ */ import_react13.default.createElement(
    import_react12.ModalOverlay,
    {
      bg: "blackAlpha.300",
      backdropFilter: "blur(10px) hue-rotate(90deg)"
    }
  ), /* @__PURE__ */ import_react13.default.createElement(import_react12.ModalContent, null, /* @__PURE__ */ import_react13.default.createElement(import_react12.ModalHeader, null, "Modal Title"), /* @__PURE__ */ import_react13.default.createElement(import_react12.ModalCloseButton, null), /* @__PURE__ */ import_react13.default.createElement(import_react12.ModalBody, null, /* @__PURE__ */ import_react13.default.createElement(import_react12.Text, null, "Custom backdrop filters!"), children), /* @__PURE__ */ import_react13.default.createElement(import_react12.ModalFooter, null, /* @__PURE__ */ import_react13.default.createElement(import_react12.Button, { onClick: onClose }, "Close"))));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  Counter,
  CustomCard,
  CustomModal,
  CustomSwitch,
  Header,
  Input,
  Select,
  TextArea,
  setupCounter
});
//# sourceMappingURL=index.js.map