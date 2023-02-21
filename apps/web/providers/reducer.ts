import { ActionType, JourneyType } from "./actions";

export function stepsReducer(state: JourneyType, action: ActionType) {
  switch (action.type) {
    case "MOVE_FORWARD":
      const nextStep = state.steps.find(
        (step) => step.id === action.payload.targetStepId
      );
      if (action.payload.targetStepId === 6) {
        console.log("finished");
        return {
          ...state,
          completedOnboarding: true
        }
      } else {
        return {
          ...state,
          currentStep: {
            ...nextStep,
            active: true,
          },
        };
      }

    case "MOVE_BACKWARDS":
      const prevStep = state.steps.find(
        (step) => step.id === state.currentStep.id - 1
      );
      return {
        ...state,
        currentStep: {
          ...prevStep,
          active: true,
        },
      };

    case "UPDATE_JOURNEY":
      return {
        ...state,
        journey: {
          ...action.payload,
        },
      };
    default:
      return state;
  }
}

export const journeyReducer = (state, action) => {
  
};
