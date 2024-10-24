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
import React from "react";
var Button = () => {
  return /* @__PURE__ */ React.createElement("button", null);
};

// components/input.tsx
import React2 from "react";
import { Input as ChakraInput, FormControl, FormLabel } from "@chakra-ui/react";
var Input = ({ label, name, ...props }) => {
  return /* @__PURE__ */ React2.createElement(FormControl, { id: name }, label && /* @__PURE__ */ React2.createElement(FormLabel, null, label), /* @__PURE__ */ React2.createElement(ChakraInput, { name, ...props }));
};

// components/select.tsx
import React3 from "react";
import { Select as ChakraSelect, FormControl as FormControl2, FormLabel as FormLabel2 } from "@chakra-ui/react";
var Select = ({
  label = "",
  name = "",
  option = [],
  size = "md",
  ...rest
}) => {
  return /* @__PURE__ */ React3.createElement(FormControl2, { id: name }, label && /* @__PURE__ */ React3.createElement(FormLabel2, null, label), /* @__PURE__ */ React3.createElement(ChakraSelect, { placeholder: `Select ${label}`, size, ...rest }, option.map((opt) => /* @__PURE__ */ React3.createElement("option", { key: opt.value, value: opt.value }, opt.label))));
};

// components/textArea.tsx
import { FormControl as FormControl3, FormLabel as FormLabel3, Textarea } from "@chakra-ui/react";
import React4 from "react";
var TextArea = ({ label, name, ...props }) => {
  return /* @__PURE__ */ React4.createElement(React4.Fragment, null, /* @__PURE__ */ React4.createElement(FormControl3, { id: name }, label && /* @__PURE__ */ React4.createElement(FormLabel3, null, label), /* @__PURE__ */ React4.createElement(Textarea, { name, placeholder: "Here is a sample placeholder", ...props })));
};

// components/customSwitch.tsx
import React5 from "react";
import { FormControl as FormControl4, FormLabel as FormLabel4, Switch } from "@chakra-ui/react";
var CustomSwitch = ({
  label = "Enable email alerts?",
  ...rest
}) => {
  return /* @__PURE__ */ React5.createElement(FormControl4, { display: "flex", alignItems: "center" }, /* @__PURE__ */ React5.createElement(FormLabel4, { htmlFor: "email-alerts", mb: "0" }, label), /* @__PURE__ */ React5.createElement(Switch, { id: "email-alerts", ...rest }));
};

// components/customCard.tsx
import { Button as Button2, Card, CardBody, CardFooter, CardHeader, Image } from "@chakra-ui/react";
import React6 from "react";
var CustomCard = ({
  isHeader = false,
  isFooter = false,
  headerContent = /* @__PURE__ */ React6.createElement(React6.Fragment, null),
  footerContent = /* @__PURE__ */ React6.createElement(React6.Fragment, null),
  cardMainContent = /* @__PURE__ */ React6.createElement(React6.Fragment, null),
  ...rest
}) => {
  return /* @__PURE__ */ React6.createElement(Card, { maxW: "md", ...rest }, isHeader && /* @__PURE__ */ React6.createElement(CardHeader, null, headerContent), /* @__PURE__ */ React6.createElement(CardBody, null, cardMainContent), /* @__PURE__ */ React6.createElement(
    Image,
    {
      objectFit: "cover",
      src: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      alt: "Chakra UI"
    }
  ), isFooter && /* @__PURE__ */ React6.createElement(
    CardFooter,
    {
      justify: "space-between",
      flexWrap: "wrap",
      sx: {
        "& > button": {
          minW: "136px"
        }
      }
    },
    /* @__PURE__ */ React6.createElement(Button2, { flex: "1", variant: "ghost", leftIcon: /* @__PURE__ */ React6.createElement(React6.Fragment, null) }, "Like"),
    /* @__PURE__ */ React6.createElement(Button2, { flex: "1", variant: "ghost", leftIcon: /* @__PURE__ */ React6.createElement(React6.Fragment, null) }, "Comment"),
    /* @__PURE__ */ React6.createElement(Button2, { flex: "1", variant: "ghost", leftIcon: /* @__PURE__ */ React6.createElement(React6.Fragment, null) }, "Share"),
    footerContent
  ));
};

// components/customModal.tsx
import { Button as Button3, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";
import React7 from "react";
var CustomModal = ({ isOpen = false, onClose, children = /* @__PURE__ */ React7.createElement(React7.Fragment, null) }) => {
  return /* @__PURE__ */ React7.createElement(Modal, { isCentered: true, isOpen, onClose }, isOpen && /* @__PURE__ */ React7.createElement(
    ModalOverlay,
    {
      bg: "blackAlpha.300",
      backdropFilter: "blur(10px) hue-rotate(90deg)"
    }
  ), /* @__PURE__ */ React7.createElement(ModalContent, null, /* @__PURE__ */ React7.createElement(ModalHeader, null, "Modal Title"), /* @__PURE__ */ React7.createElement(ModalCloseButton, null), /* @__PURE__ */ React7.createElement(ModalBody, null, /* @__PURE__ */ React7.createElement(Text, null, "Custom backdrop filters!"), children), /* @__PURE__ */ React7.createElement(ModalFooter, null, /* @__PURE__ */ React7.createElement(Button3, { onClick: onClose }, "Close"))));
};
export {
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
};
//# sourceMappingURL=index.mjs.map