import { Flex, Text } from "@chakra-ui/react";
import { DragWrapper, DropWrapper } from "../../dnd";
import { Types } from "./types";
import { KanbanList } from "./KanbanList";

const lists = [
  {
    _id: "1",
    name: "Todo",
    cards: [
      {
        _id: "3",
        name: "Prepare video demo",
        status: "Pending",
        progress: 15,
        description:
          "purpose - create a nice environment so the user stays for longer",
        notifications: 5,
        comments: 9,
        attachments: 5,
        tasks: 6,
        completedTasks: 2,
        members: [
          {
            id: 1,
            avatar:
              "https://res.cloudinary.com/dwacr3zpp/image/upload/v1649189711/neno/avatars/icons8-woody-woodpecker.svg",
          },
          {
            id: 2,
            avatar:
              "https://res.cloudinary.com/dwacr3zpp/image/upload/v1649189708/neno/avatars/icons8-jake.svg",
          },
        ],
      },
      {
        _id: "5",
        name: "Use dummy data",
        status: "Approved",
        progress: 0,
        description:
          "purpose - create a nice environment so the user stays for longer",
        notifications: 25,
        comments: 3,
        attachments: 1,
        tasks: 4,
        completedTasks: 3,
        members: [
          {
            id: 1,
            avatar:
              "https://res.cloudinary.com/dwacr3zpp/image/upload/v1657997900/inspirers/images/conifer-trophy-1.svg",
          },
        ],
      },
      {
        _id: "5",
        name: "Deploy product demo",
        status: "Pending",
        progress: 0,
        description:
          "purpose - create a nice environment so the user stays for longer",
        notifications: 25,
        comments: 3,
        attachments: 4,
        tasks: 6,
        completedTasks: 3,
        members: [
          {
            id: 1,
            avatar:
              "https://res.cloudinary.com/dwacr3zpp/image/upload/v1649189708/neno/avatars/icons8-jason-voorhees.svg",
          },
        ],
      },
    ],
  },
  {
    _id: "2",
    name: "Doing",
    cards: [
      {
        _id: "1",
        name: "Onboard New Developers",
        status: "Progress",
        progress: 25,
        description:
          "purpose - create a nice environment so the user stays for longer",
        notifications: 25,
        comments: 32,
        attachments: 1,
        tasks: 6,
        completedTasks: 3,
        members: [
          {
            id: 1,
            avatar:
              "https://res.cloudinary.com/dwacr3zpp/image/upload/v1649189708/neno/avatars/icons8-jason-voorhees.svg",
          },
        ],
      },
    ],
  },
  {
    _id: "3",
    name: "Review",
    cards: [
      {
        _id: "2",
        name: "Brainstorm logo ideas",
        status: "Review",
        progress: 95,
        description:
          "purpose - create a nice environment so the user stays for longer",
        comments: 3,
        tasks: 6,
        completedTasks: 3,
        members: [
          {
            id: 1,
            avatar:
              "https://res.cloudinary.com/dwacr3zpp/image/upload/v1657997900/inspirers/images/conifer-trophy-1.svg",
          },
          {
            id: 3,
            avatar:
              "https://res.cloudinary.com/dwacr3zpp/image/upload/v1649189708/neno/avatars/icons8-jason-voorhees.svg",
          },
        ],
      },
    ],
  },
  {
    _id: "4",
    name: "Backlog",
    cards: [
      {
        _id: "2",
        name: "Enable real-time",
        status: "Blocked",
        progress: 0,
        description:
          "purpose - create a nice environment so the user stays for longer",
        comments: 3,
        attachments: 2,
      },
    ],
  },
];

export const TaskBoard = () => {
  function onDrop(item, monitor) {}

  function moveItem() {
    console.log("moved");
  }

  return (
    <>
      <DropWrapper type={Types.LIST} onDrop={onDrop} index={1}>
        <Flex gap={4} overflowX="scroll" width="1250px">
          {lists &&
            lists.map((list, index) => (
              <DragWrapper type={Types.LIST} moveItem={moveItem} item={list}>
                <KanbanList list={list} key={list._id} index={index} />
              </DragWrapper>
            ))}
        </Flex>
      </DropWrapper>
    </>
  );
};
