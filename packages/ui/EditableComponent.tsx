import React, { useRef, useState, useEffect } from "react";
import { Box, Flex, Heading, Text, Stack } from "@chakra-ui/react";
import Journey from "../[id]";
import ContentEditable from "react-contenteditable";
import { v4 as uuidv4 } from "uuid";

export const setCaretToEnd = (element) => {
  const range = document.createRange();
  const selection = window.getSelection();
  range.selectNodeContents(element);
  range.collapse(false);
  selection.removeAllRanges();
  selection.addRange(range);
  element.focus();
};

const getCaretCoordinates = () => {
  let x, y;
  const selection = window.getSelection();
  if (selection.rangeCount !== 0) {
    const range = selection.getRangeAt(0).cloneRange();
    range.collapse(false);
    const rect = range.getClientRects()[0];
    if (rect) {
      x = rect.left;
      y = rect.top;
    }
  }
  return { x, y };
};

const MENU_HEIGHT = 150;
const allowedTags = [
  {
    id: "page-title",
    tag: "h1",
    label: "Page Title",
  },
  {
    id: "heading",
    tag: "h2",
    label: "Heading",
  },
  {
    id: "subheading",
    tag: "h3",
    label: "Subheading",
  },
  {
    id: "paragraph",
    tag: "p",
    label: "Paragraph",
  },
];

export const EditableComponent = (props) => {
  const contentEditable = React.createRef();
  const [block, setBlock] = useState({
    html: "",
    tag: "p",
    previousKey: "",
    htmlBackup: null,
  });

  const onChangeHandler = (e) => {
    setBlock((currentState) => ({ ...currentState, html: e.target.value }));
  };

  useEffect(() => {
    setBlock((currentState) => ({
      ...currentState,
      html: props.html,
      tag: props.tag,
    }));
  }, []);

  const onKeyDownHandler = (e) => {
    console.log("aye!");
    if (e.key === "/") {
      setBlock((currentState) => ({ ...currentState, htmlBackup: block.html }));
    }
    if (e.key === "Enter") {
      if (block.previousKey !== "Shift") {
        e.preventDefault();
        props.addBlock({
          id: props.id,
          ref: contentEditable.current,
        });
      }
    }
    if (e.key === "Backspace" && block.html) {
      e.preventDefault();
      props.deleteBlock({
        id: props.id,
        ref: contentEditable.current,
      });
    }
    setBlock((currentState) => ({ ...currentState, previousKey: e.key }));
  };

  return (
    <Box bg="white" borderRadius="1rem">
      <ContentEditable
        className="Block"
        innerRef={contentEditable}
        html={block.html}
        tagName={block.tag}
        onChange={onChangeHandler}
        onKeyDown={onKeyDownHandler}
      />
    </Box>
  );
};
