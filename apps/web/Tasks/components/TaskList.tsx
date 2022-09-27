import { Stack } from "@chakra-ui/react";
import { TaskItem } from "./TaskItem";
import { TaskObject } from "types/Task";
import { FiClipboard } from "react-icons/fi";
import { EmptyState } from "ui";

type TaskListProps = {
  tasks: TaskObject[];
  addTask: any;
  journey: any;
};

export const TaskList = ({ addTask, journey, tasks }: TaskListProps) => {
  if (tasks?.length === 0) {
    return (
      <EmptyState
        icon={<FiClipboard size="1.5rem" />}
        heading="No Tasks"
        description="Wake up early, sit straight, and meditate. It will give you a refreshing start to your day and help you be more productive."
        action={{
          title: "Create Task",
          handler: () => {}
        }}
      />
    )
  }

  return (
    <Stack width="100%">
      {tasks?.map((task) => (
        <TaskItem task={task} key={task.id} />
      ))}
    </Stack>
  );
};
