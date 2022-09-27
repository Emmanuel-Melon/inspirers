import { client } from "../../utils/client";
import { useState } from "react";
import {
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import { TaskList } from "../../Tasks/components/TaskList";
import { TaskViewMenu } from "../../Tasks/components/TaskViewMenu";
import { TaskBoard } from "../../Tasks/components/TaskBoard";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Modal } from "ui";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";
import { useFetch } from "../../hooks/useSwr";
import { AddTask } from "../../Tasks/components/AddTask";

export default function Tasks(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [view, setView] = useState("list");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data: tasks, isError } = useFetch(`/tasks/${props?.user?.id}/list`);
  const [show, setShow] = useState(false);
  function openModal() {
    setShow(true);
  }

  function closeModal() {
    setShow(false);
  }

  function addTaskItem(data) {
    setIsLoading(true);
    client
      .post("/tasks", {
        ...data,
        userId: props?.user?.id
      })
      .then((response) => {
        setIsLoading(false);
      })
      .then(() => closeModal())
  }

  const changeView = (view) => {
    setView(view);
  };

  return (
    <>
      <Flex justifyContent="space-between" width="100%" gap={8}>
        <Flex flexGrow={1} borderRadius="0.5rem" direction="column" gap={8}>
          <TaskViewMenu
            changeView={changeView}
            view={view}
            addNewJourney={onOpen}
            openModal={openModal}
          />
          <Flex>
            {view === "list" ? (
              <TaskList tasks={tasks?.data} />
            ) : (
              <DndProvider backend={HTML5Backend}>
                <TaskBoard tasks={tasks?.data} />
              </DndProvider>
            )}
          </Flex>
        </Flex>
      </Flex>
      <Modal show={show} close={closeModal}>
        <AddTask
          addTask={addTaskItem}
          journey={{ id: "cl85wpf3f833650btnkive11j" }}
          isLoading={isLoading}
        />
      </Modal>
    </>
  );
}


export async function getServerSideProps(context) {
  const { session, user } = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );
  const { email, name, image, bio } = session?.user || {};
  const { id } = user || {};

  return {
    props: {
      user: {
        id: id || null,
        email: email || null,
        name: name || null,
        bio: bio || null,
        image: image || null,
      },
    },
  };
}
