import next from "next";
import React, { createContext, useReducer, useState } from "react";
import { journeyReducer } from "./reducer";
import { UPDATE_JOURNEY } from "./actions";

export const JourneyContext = createContext<any>(null);
export const JourneyConsumer = JourneyContext.Consumer;

export interface JourneyContextType {
  children: React.ReactChild | React.ReactChild[];
}

const initialState = {
  journey: {
    id: "cla15t1mr0005ksbt3cx1dyqn",
    title: "",
    description: "",
    userId: "",
  },
};

export const JourneyProvider = ({ children }: JourneyContextType) => {
  const [state, dispatch] = useReducer(journeyReducer, initialState);

  return (
    <JourneyContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </JourneyContext.Provider>
  );
};
