import next from "next";
import React, { createContext, useReducer, useState } from "react";

export const JourneyOnboardingContext = createContext<any>(null);
export const JourneyOnboardingConsumer = JourneyOnboardingContext.Consumer;

type JourneyOnboardingProps = {
  children: React.ReactChild | React.ReactChild[];
};

const initialState = {
  currentStep: {
    id: 1,
    title: "Journey",
    active: true,
    skippable: false,
    description: "Privacy Policies are agreements that specify what type of data a website collects from users and how that data will be used. Known as personal information.",
    mimi: {
      header: "",
      greeting: "Hi, my name is Mimi and I'll be your guide in this journey",
    },
    completed: false,
    subSteps: [
      {
        id: 1,
        completed: false
      }
    ]
  },
  steps: [
    {
      id: 1,
      title: "New Beginning",
      active: true,
      skippable: false,
      completed: false
    },
    {
      id: 2,
      title: "About your journey",
      active: false,
      skippable: false,
      completed: false
    },
    {
      id: 3,
      title: "Journey Goals",
      active: false,
      skippable: false,
      completed: false
    },
    {
      id: 4,
      title: "Goals",
      active: false,
      skippable: false,
      completed: false
    }
  ]

};

function reducer(state, action) {
  switch (action.type) {
    case "MOVE_FORWARD":
      const nextStep = state.steps.find(step => step.id === action.payload.targetStepId);
      return {
        ...state,
        currentStep: {
          ...nextStep,
          active: true
        }
      };

    case "MOVE_BACKWARDS":
      const prevStep = state.steps.find(step => step.id === state.currentStep.id - 1);
      return {
        ...state,
        currentStep: {
          ...prevStep,
          active: true
        }
      };
    default:
      return state;
  }
}

export const JourneyOnboardingProvider = ({ children }: JourneyOnboardingProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [blueprint, setBluePrint] = useState<string>("template");
  const updateBluePrint = (value: string) => setBluePrint(value);
  const moveForward = async (targetStepId, data) => {
    dispatch({
      type: "MOVE_FORWARD",
      payload: {
        targetStepId,
        ...data || {}
      }
    });
  }
  const moveBackwards = (targetStepId) => {
    dispatch({
      type: "MOVE_BACKWARDS",
      payload: {
        targetStepId
      }
    });
  }

  return (
    <JourneyOnboardingContext.Provider
      value={{
        ...state,
        moveBackwards,
        moveForward,
        updateBluePrint,
        blueprint
      }}
    >
      {children}
    </JourneyOnboardingContext.Provider>
  );
};
