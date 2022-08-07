import React, { useRef, useState } from "react";
import { Box, Flex, Heading, Text, Stack, Input } from "@chakra-ui/react"
// import { AddTaskItem } from ""
import { v4 as uuidv4 } from 'uuid';
import { Button, EditableComponent } from "ui";
import { FiPlus } from "react-icons/fi";
import { AddTask } from "../../Tasks/components/AddTask";
import { CustomModal } from "ui";

const initialBlock = { id: uuidv4(), html: "", tag: "p" };



export const JourneyEditor = ({ journey }) => {
  const contentEditable = React.createRef();
  const [blocks, setBlocks] = useState([initialBlock]);

  const updatePageHandler = (updatedBlock) => {
    const localBlocks = blocks;
    const index = localBlocks.map((b) => b.id).indexOf(updatedBlock.id);
    const updatedBlocks = [...localBlocks];
    updatedBlocks[index] = {
      ...updatedBlocks[index],
      tag: updatedBlock.tag,
      html: updatedBlock.html
    };
    setBlocks({ localBlocks: updatedBlocks });
  }

  const addBlockHandler = (currentBlock) => {
    const newBlock = { id: uuidv4(), html: "", tag: "p" };
    const localBlocks = blocks;
    const index = localBlocks.map((b) => b.id).indexOf(currentBlock.id);
    const updatedBlocks = [...localBlocks];
    updatedBlocks.splice(index + 1, 0, newBlock);
    setBlocks({ localBlocks: updatedBlocks }, () => {
      currentBlock.ref.nextElementSibling.focus();
    });
  }

  const deleteBlockHandler = (currentBlock) => {
    const previousBlock = currentBlock.ref.previousElementSibling;
    if (previousBlock) {
      const localBlocks = blocks;
      const index = localBlocks.map((b) => b.id).indexOf(currentBlock.id);
      const updatedBlocks = [...localBlocks];
      updatedBlocks.splice(index, 1);
      setBlocks({ localBlocks: updatedBlocks }, () => {
        setCaretToEnd(previousBlock);
        previousBlock.focus();
      });
    }
  }


  return (
    <Stack gap={4} color="brand.primaryText">
      <Heading>{journey.title}</Heading>
      <Flex justifyContent="space-between" direction="column" gap={8}>
        <Flex gap={4} direction="column">
          <Heading size="md">Add Milestones</Heading>
          <Text>These are major goals in your journy.</Text>
          <Button size="sm" icon={<FiPlus />} width="fit-content">Add Milestone</Button>
        </Flex>
        <Flex gap={4} direction="column" >
          <Heading size="md">Add Tasks</Heading>
          <Text>These are major goals in your journy.</Text>
          <Button size="sm" icon={<FiPlus />} width="fit-content">Add Task</Button>
        </Flex>
      </Flex>
      <Flex gap={4} direction="column">
        <Heading size="md">Pack Resources</Heading>
        <Text>These are major goals in your journy.</Text>
      </Flex>
      {
        false ? <Stack>
          {
            blocks.map((block, key) => <EditableComponent
              key={key}
              id={block.id}
              tag={block.tag}
              html={block.html}
              updatePage={updatePageHandler}
              addBlock={addBlockHandler}
              deleteBlock={deleteBlockHandler}
            />)
          }
        </Stack> : null
      }
    </Stack>
  )
}