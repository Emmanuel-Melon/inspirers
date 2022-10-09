import next from "next";
import React, { createContext, useReducer, useState } from "react";
import { stepsReducer } from "./reducer";
import { MOVE_BACKWARDS, MOVE_FORWARD, UPDATE_JOURNEY } from "./actions";

export const JourneyOnboardingContext = createContext<any>(null);
export const JourneyOnboardingConsumer = JourneyOnboardingContext.Consumer;

type JourneyOnboardingProps = {
  children: React.ReactChild | React.ReactChild[];
};

const initialState = {
  journey: {
    id: "",
    title: "",
    description: "",
  },
  currentStep: {
    id: 1,
    title: "New Journey",
    active: true,
    skippable: false,
    journeyId: "",
    description:
      "Inspirers works in a way that lets you create your goal, add tasks and their reminders, connect with people with similar journeys, add the resources (books, videos, or courses) in your backpack that you carry on your journey, and lastly, you can track and analyze your performance periodically.",
    mimi: {
      header: "",
      greeting: "Hi, my name is Mimi and I'll be your guide in this journey",
    },
    completed: false,
  },
  steps: [
    {
      id: 1,
      title: "New Beginning",
      active: true,
      skippable: false,
      completed: false,
    },
    {
      id: 2,
      title: "About your journey",
      active: false,
      skippable: false,
      completed: false,
    },
    {
      id: 3,
      title: "Getting ready",
      active: false,
      skippable: false,
      completed: false,
    },
  ],
};

export const JourneyOnboardingProvider = ({
  children,
}: JourneyOnboardingProps) => {
  const [state, dispatch] = useReducer(stepsReducer, initialState);
  const [blueprint, setBluePrint] = useState<string>("template");
  const onBluePrintChange = (value: string) => setBluePrint(value);

  const moveForward = (targetStepId) => {
    dispatch({
      type: MOVE_FORWARD,
      payload: {
        targetStepId,
      },
    });
  };
  const moveBackwards = (targetStepId) => {
    dispatch({
      type: MOVE_BACKWARDS,
      payload: {
        targetStepId,
      },
    });
  };

  const updateJourney = async (data, options) => {
    dispatch({
      type: UPDATE_JOURNEY,
      payload: {
        ...data,
      },
    });
  };

  return (
    <JourneyOnboardingContext.Provider
      value={{
        ...state,
        moveBackwards,
        moveForward,
        onBluePrintChange,
        blueprint,
        updateJourney,
      }}
    >
      {children}
    </JourneyOnboardingContext.Provider>
  );
};
