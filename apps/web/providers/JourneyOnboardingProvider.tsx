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
      skippable: false
  },
  steps: [
      {
          id: 1,
          title: "Journey",
          active: true,
          skippable: false
      },
      {
          id: 2,
          title: "About you",
          active: false,
          skippable: false
      },
      {
          id: 3,
          title: "Your dream",
          active: false,
          skippable: false
      },
      {
          id: 4,
          title: "Goals",
          active: false,
          skippable: false
      },
      {
          id: 5,
          title: "Finalizing",
          active: false,
          skippable: false
      }
  ]

};

function reducer(state, action) {

  switch (action.type) {
      case "MOVE_FORWARD":
          const nextStep = state.steps.find(step => {
              return step.id === state.currentStep.id + 1;
          });
          const newState = {
              ...state,
              currentStep: {
                  ...nextStep,
                  active: true
              }
          }
          return newState;
      case "MOVE_BACKWARDS":
          const prevStep = state.steps.find(step => {
              return step.id === state.currentStep.id - 1;
          });
          const prevState = {
              ...state,
              currentStep: {
                  ...prevStep,
                  active: true
              }
          }
          return prevState;
      default:
          console.log(action);
          return state;
  }
}

export const JourneyOnboardingProvider = ({ children }: JourneyOnboardingProps) => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const [blueprint, setBluePrint] = useState<string>("template");
  const updateBluePrint = (value: string) => setBluePrint(value);

  const moveForward = async () => {
    /**
     * const blueprint = await client.post("/journeys/blueprint", {
        userId: "cl5imusb0005800bt26o62b2m",
        title: "Digital Marketer",
        description: "ain't nothing to it but to do it",
        blueprint: blueprint
    });
     */

    console.log("hey");


    dispatch({
        type: "MOVE_FORWARD"
    });
    console.log(state.currentStep);
}

const moveBackwards = () => {
    dispatch({ type: "MOVE_BACKWARDS" });
}

  return (
    <JourneyOnboardingContext.Provider
      value={{
        ...state,
        moveBackwards,
        moveForward,
        updateBluePrint
      }}
    >
      {children}
    </JourneyOnboardingContext.Provider>
  );
};
