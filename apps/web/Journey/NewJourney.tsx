import {
    Flex,
    Text,
    Select
} from "@chakra-ui/react";
import { TextInput } from "ui/Input";
import { JourneySteps } from "./Steps";
import { JourneyBluePrint } from "./JourneyBluePrint";
import { useState, useReducer } from "react";
import { Button } from "ui";

const PersonalInfo = () => {
    return (
        <>
            <Text fontWeight="700">Your career/ passion?</Text>
            <TextInput
                placeholder="E.g acting, fitness"
                type="text"
                handleInputchange={() => { }}
            />
            <Text fontWeight="700">How would you describe yourself?</Text>
            <Select placeholder='Select option' borderRadius="1rem">
                <option value='option1'>Student</option>
                <option value='option2'>Profesional</option>
                <option value='option3'>Guru</option>
            </Select>
            <TextInput placeholder="Other"
                type="text"
                handleInputchange={() => { }}
            />
        </>

    )
}


// <JourneyBluePrint navigateToNextStep={navigateToNextStep} />

export const NewJourney = () => {
    const initialState = {
        currentStep: {
            id: 1,
            title: "Journey",
            active: true
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
                    console.log(state.currentStep.id + step.id);
                    return step.id === 2;
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
                    console.log(state.currentStep.id + step.id);
                    return step.id === 1;
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

    const [state, dispatch] = useReducer(reducer, initialState);

    const moveForward = () => {
        dispatch({ type: "MOVE_FORWARD" });
    }

    const moveBackwards = () => {
        dispatch({ type: "MOVE_BACKWARDS" });
    }

    return (
        <>
            <Flex
                gap={4}
                py="4"
                width="100%"
                alignItems="flex-start"
            >
                <Flex direction={"column"} p="8" flexGrow="1" justifyContent="space-between" height="100%" flexBasis="auto" gap={4}>
                    <Text>{state.currentStep.title} {state.currentStep.id}</Text>
                    <Button bg="#fff" color="brand.primary" onClick={moveBackwards}>Back</Button>
                    <Button onClick={moveForward}>Next Step</Button>
                    <JourneySteps steps={state.steps} />
                </Flex>
            </Flex>
        </>
    )
}