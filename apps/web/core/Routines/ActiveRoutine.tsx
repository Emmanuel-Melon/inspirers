import { Stack, Text, Flex, Heading, Tag } from "@chakra-ui/react";
import { Card, AsyncDropdown, Button } from "ui";
import { useRouter } from "next/router";
import { useFetch } from "hooks/useSwr";
import { format } from "date-fns";

export const ActiveRoutine = () => {
  const today = format(new Date(), "yyyy-MM-dd");
  const startsAt = format(new Date(), "HH:mm");

  const {
    data: routine,
    isLoading: isRoutineLoading,
    isError: isRoutineError,
  } = useFetch(`/routines/upcoming?startingDate=${today}&startsAt=${startsAt}`);

  console.log(routine);

  if(routine === null) {
    return <p>Noting!</p>
  }

  return (
    <>
      <Card>
        <Heading size="md">{routine?.title}</Heading>
        <Tag>
          Starts: {format(new Date("1970-01-01T20:20:00.000Z"), "HH:mm")}
        </Tag>
      </Card>
    </>
  );
};
