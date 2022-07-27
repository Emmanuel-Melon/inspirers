export const MOVE_FORWARD = "MOVE_FORWARD";

export const MOVE_BACKWARDS = "MOVE_BACKWARDS";

export const UPDATE_JOURNEY = "UPDATE_JOURNEY";

export type ActionType = {
    type: string;
    payload: any;
}

export type JourneyOnboardingStep = {
    id: string | number;
    title: string;
    active: boolean;
    skippable: boolean;
    completed: boolean;
}

export type JourneyType = {
    steps: JourneyOnboardingStep[];
};